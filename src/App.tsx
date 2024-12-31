import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/error/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/landing/LandingPage';
import TextSummarizer from './components/TextSummarizer';
import SEO from './components/shared/SEO';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <SEO />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/summarizer" element={<TextSummarizer />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}