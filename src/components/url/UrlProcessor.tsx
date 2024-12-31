import React from 'react';
import { Link } from 'lucide-react';

interface UrlProcessorProps {
  onUrlSubmit: (url: string) => void;
  disabled?: boolean;
}

export default function UrlProcessor({ onUrlSubmit, disabled }: UrlProcessorProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const url = formData.get('url') as string;
    if (url?.trim()) {
      onUrlSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <div className="flex-1">
        <input
          type="url"
          name="url"
          placeholder="Enter URL to summarize..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          disabled={disabled}
        />
      </div>
      <button
        type="submit"
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 disabled:bg-primary-300"
      >
        <Link className="h-4 w-4" />
        Fetch & Summarize
      </button>
    </form>
  );
}