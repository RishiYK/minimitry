import React, { useState } from 'react';
import { Link } from 'lucide-react';

interface UrlInputProps {
  onUrlSubmit: (url: string) => void;
  disabled?: boolean;
}

export default function UrlInput({ onUrlSubmit, disabled }: UrlInputProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onUrlSubmit(url.trim());
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to summarize..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          disabled={disabled}
        />
      </div>
      <button
        type="submit"
        disabled={!url.trim() || disabled}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400"
      >
        <Link className="h-4 w-4" />
        Fetch
      </button>
    </form>
  );
}