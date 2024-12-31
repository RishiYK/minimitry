import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      {isBot ? (
        <Bot className="h-6 w-6 text-primary flex-shrink-0" />
      ) : (
        <User className="h-6 w-6 text-gray-600 flex-shrink-0" />
      )}
      <p className="text-gray-700 whitespace-pre-wrap">{message}</p>
    </div>
  );
}