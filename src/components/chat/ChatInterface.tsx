import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import UrlProcessor from '../url/UrlProcessor';
import DocumentUploader from '../document/DocumentUploader';
import { summarizeText } from '../../services/summarizer';
import { fetchTextFromUrl } from '../../services/urlFetcher';
import { isValidUrl, extractDomain } from '../../utils/urlUtils';
import { extractTextFromDocument } from '../../utils/documentUtils';

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm your AI assistant. You can:\n1. Send me any text to summarize\n2. Share a URL to summarize web content\n3. Upload a PDF or Word document",
      isBot: true
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    setMessages(prev => [...prev, { text, isBot: false }]);
    setIsLoading(true);

    try {
      const summary = await summarizeText(text);
      setMessages(prev => [...prev, { text: summary, isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: 'Sorry, I encountered an error while generating the summary. Please try again.',
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUrlSubmit = async (url: string) => {
    if (!isValidUrl(url)) {
      setMessages(prev => [...prev, {
        text: 'Please provide a valid URL.',
        isBot: true
      }]);
      return;
    }

    setMessages(prev => [...prev, {
      text: `Processing content from: ${url}`,
      isBot: true
    }]);
    setIsLoading(true);

    try {
      const content = await fetchTextFromUrl(url);
      const domain = extractDomain(url);
      const summary = await summarizeText(content);
      
      setMessages(prev => [...prev, {
        text: `Summary from ${domain}:\n\n${summary}`,
        isBot: true
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: 'Sorry, I had trouble processing that URL. Please make sure it\'s accessible and try again.',
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = async (file: File) => {
    setMessages(prev => [...prev, {
      text: `Processing document: ${file.name}`,
      isBot: true
    }]);
    setIsLoading(true);

    try {
      const content = await extractTextFromDocument(file);
      const summary = await summarizeText(content);
      
      setMessages(prev => [...prev, {
        text: `Summary of ${file.name}:\n\n${summary}`,
        isBot: true
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: 'Sorry, I had trouble processing that document. Please make sure it\'s a valid PDF or Word file and try again.',
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-lg">
      <div className="p-4 space-y-4 border-b">
        <UrlProcessor onUrlSubmit={handleUrlSubmit} disabled={isLoading} />
        <DocumentUploader onFileSelect={handleFileSelect} disabled={isLoading} />
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
      </div>
      <div className="border-t p-4">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}