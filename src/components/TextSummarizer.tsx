import React from 'react';
import { FileText } from 'lucide-react';
import BackButton from './ui/BackButton';
import DottedBackground from './ui/DottedBackground';
import ChatInterface from './chat/ChatInterface';

export default function TextSummarizer() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <DottedBackground />
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <BackButton to="/" />
        </div>
        
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileText className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Minimi</h1>
          <p className="text-gray-600">Chat with AI to get instant summaries of your text</p>
        </div>

        <ChatInterface />
      </div>
    </div>
  );
}