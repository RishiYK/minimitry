import React from 'react';
import { Volume2 } from 'lucide-react';
import type { Summary } from '../types/podcast';

interface SummaryDisplayProps {
  summary: Summary;
}

export default function SummaryDisplay({ summary }: SummaryDisplayProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6">
      <div className="flex items-start gap-4">
        <Volume2 className="h-6 w-6 text-indigo-600 mt-1" />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{summary.title}</h2>
          <p className="text-sm text-gray-500">{summary.duration}</p>
        </div>
      </div>
      <div className="prose prose-indigo">
        <p className="text-gray-700 leading-relaxed">{summary.summary}</p>
      </div>
    </div>
  );
}