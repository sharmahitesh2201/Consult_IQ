import React from 'react';
import { ChatMessage, GroundingChunk, GroundingMetadata } from '../types';
import { marked } from 'marked'; // For rendering Markdown

interface ChatBubbleProps {
  message: ChatMessage;
  groundingMetadata?: GroundingMetadata;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, groundingMetadata }) => {
  const isUser = message.sender === 'user';
  const bubbleClasses = isUser
    ? 'bg-red-600 text-white self-end rounded-l-lg rounded-br-lg'
    : 'bg-gray-200 text-gray-800 self-start rounded-r-lg rounded-bl-lg';
  
  const avatarUrl = isUser 
    ? "https://picsum.photos/seed/useravatar/30/30" 
    : "https://picsum.photos/seed/aiavatar/30/30";

  const parsedText = typeof message.text === 'string' ? marked.parse(message.text) : '';

  return (
    <div className={`flex items-end mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <img src={avatarUrl} alt="AI Avatar" className="w-8 h-8 rounded-full mr-3 order-1"/>
      )}
      <div className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4 py-3 shadow ${bubbleClasses} order-2`}>
        {message.isLoading ? (
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
          </div>
        ) : (
          <div className="prose prose-sm max-w-none prose-p:text-inherit prose-strong:text-inherit prose-a:text-inherit" dangerouslySetInnerHTML={{ __html: parsedText }} />
        )}
        {!isUser && groundingMetadata && groundingMetadata.groundingChunks && groundingMetadata.groundingChunks.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-300">
            <p className="text-xs font-semibold text-gray-600 mb-1">Sources:</p>
            <ul className="list-disc list-inside space-y-1">
              {groundingMetadata.groundingChunks.map((chunk, index) => (
                <li key={index} className="text-xs">
                  <a
                    href={chunk.web.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline"
                    title={chunk.web.title}
                  >
                    {chunk.web.title || chunk.web.uri}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isUser && (
         <img src={avatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full ml-3 order-3"/>
      )}
    </div>
  );
};

export default ChatBubble;