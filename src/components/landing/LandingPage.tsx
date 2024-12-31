import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Footer from '../layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Hero />
      <Features />
      <div className="flex-grow" />
      <Footer />
    </div>
  );
}