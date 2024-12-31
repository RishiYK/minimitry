import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-600">
      <p className="flex items-center justify-center gap-1">
        Made with <Heart className="h-4 w-4 text-red-500 fill-current" fill="currentColor" /> by{' '}
        <a 
          href="https://github.com/RishiYK" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-medium hover:text-primary transition-colors"
        >
          Rishi YK
        </a>
      </p>
    </footer>
  );
} 