import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '../hooks/useChat';
import ChatBubble from './ChatBubble';
import { SendIcon, CloseIcon } from '../constants';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const { messages, isLoading, error, sendMessage, currentGroundingMetadata, isApiAvailable } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading && isApiAvailable) {
      sendMessage(input.trim());
      setInput('');
    } else if (!isApiAvailable) {
        // Optionally show a more prominent message if API is not available on send attempt
        console.warn("Cannot send message: API is not available.");
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-full max-w-md h-[70vh] max-h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-300 z-50">
      <header className="p-4 bg-red-700 text-white flex justify-between items-center">
        <h3 className="text-lg font-semibold">CaseMaster AI Coach</h3>
        <button onClick={onClose} className="text-red-100 hover:text-white">
          <CloseIcon className="w-6 h-6" />
        </button>
      </header>

      <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-50">
        {messages.map((msg, index) => (
          <ChatBubble 
            key={msg.id} 
            message={msg} 
            groundingMetadata={msg.sender === 'ai' && index === messages.length -1 && !msg.isLoading ? currentGroundingMetadata : undefined}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {error && <div className="p-2 text-center text-red-600 bg-red-100 text-sm">{error}</div>}
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isApiAvailable ? "Ask your AI coach..." : "API Key not configured"}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
            disabled={isLoading || !isApiAvailable}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || !isApiAvailable}
            className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Send message"
          >
            <SendIcon className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;