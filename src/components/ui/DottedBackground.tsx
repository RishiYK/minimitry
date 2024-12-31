import React from 'react';

export default function DottedBackground() {
  return (
    <div 
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 22%) 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }}
      aria-hidden="true"
    />
  );
}