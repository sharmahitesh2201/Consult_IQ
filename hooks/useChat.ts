
import { useState, useCallback, useRef, useEffect } from 'react';
import { ChatMessage, GroundingMetadata } from '../types';
import { createChatSession, streamChatResponse, isGeminiAvailable } from '../services/geminiService';
import { Chat, Content } from '@google/genai'; // Corrected import
import { GEMINI_API_KEY_MESSAGE } from '../constants';


export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatSessionRef = useRef<Chat | null>(null);
  const [currentGroundingMetadata, setCurrentGroundingMetadata] = useState<GroundingMetadata | undefined>(undefined);

  useEffect(() => {
    if (isGeminiAvailable()) {
      chatSessionRef.current = createChatSession();
      if (!chatSessionRef.current) {
        setError("Failed to initialize chat session.");
      }
    } else {
       const apiKeyMissingMessage = GEMINI_API_KEY_MESSAGE;
       setMessages([{ 
           id: 'init-error', 
           text: apiKeyMissingMessage, 
           sender: 'ai', 
           timestamp: new Date() 
       }]);
       setError(apiKeyMissingMessage);
    }
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (!isGeminiAvailable() || !chatSessionRef.current) {
      setError("Chat service is not available. Please check API Key.");
      const serviceErrorMsg = {
        id: crypto.randomUUID(),
        text: "Chat service is not available. API Key might be missing or invalid.",
        sender: 'ai' as const,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, serviceErrorMsg]);
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsLoading(true);
    setError(null);
    setCurrentGroundingMetadata(undefined);

    const aiMessageId = crypto.randomUUID();
    // Add a placeholder for AI response
    setMessages(prevMessages => [
      ...prevMessages,
      { id: aiMessageId, text: '', sender: 'ai', timestamp: new Date(), isLoading: true },
    ]);
    
    let accumulatedResponse = "";

    try {
      // Convert ChatMessage[] to Content[] for history
      // const history: Content[] = messages
      //   .filter(msg => !msg.isLoading) // Exclude pending AI message
      //   .map(msg => ({
      //     role: msg.sender === 'user' ? 'user' : 'model',
      //     parts: [{ text: msg.text }],
      //   }));

      // The Chat object maintains history internally, so explicit history passing might not be needed unless resetting.
      // For this implementation, relying on Chat object's internal history.
      const stream = streamChatResponse(chatSessionRef.current, text /*, history */);
      
      for await (const {textChunk, groundingMetadata} of stream) {
        accumulatedResponse += textChunk;
        setMessages(prevMessages =>
          prevMessages.map(msg =>
            msg.id === aiMessageId
              ? { ...msg, text: accumulatedResponse, isLoading: true, timestamp: new Date() } 
              : msg
          )
        );
        if (groundingMetadata) {
            setCurrentGroundingMetadata(prev => ({
                ...prev,
                groundingChunks: [
                    ...(prev?.groundingChunks || []),
                    ...(groundingMetadata.groundingChunks || [])
                ].filter((v,i,a)=>a.findIndex(t=>(t.web.uri === v.web.uri))===i) // Unique URIs
            }));
        }
      }
    } catch (e) {
      console.error("Error in sendMessage stream processing:", e);
      const errorText = e instanceof Error ? e.message : "An unexpected error occurred.";
      setError(errorText);
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.id === aiMessageId
            ? { ...msg, text: `Error: ${errorText}`, isLoading: false, sender: 'ai' }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
      setMessages(prevMessages =>
        prevMessages.map(msg => (msg.id === aiMessageId ? { ...msg, isLoading: false } : msg))
      );
    }
  }, [messages]); // Ensure messages is in dependency array if history is derived from it

  return { messages, isLoading, error, sendMessage, currentGroundingMetadata, isApiAvailable: isGeminiAvailable() };
};
