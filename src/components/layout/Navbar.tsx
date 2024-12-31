import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Github } from 'lucide-react';
import Container from './Container';

export default function Navbar() {
  return (
    <nav className="py-4 border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary font-semibold">
            <FileText className="h-6 w-6" />
            <span>Minimi</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/summarizer" className="text-gray-600 hover:text-primary transition-colors">
              Try Now
            </Link>
            <a
              href="https://github.com/RishiYK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}