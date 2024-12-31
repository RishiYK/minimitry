import React, { useState } from 'react';
import { FileAudio, RefreshCw } from 'lucide-react';
import UrlInput from './UrlInput';
import FileUpload from './FileUpload';
import SummaryDisplay from './SummaryDisplay';
import BackButton from './ui/BackButton';
import DottedBackground from './ui/DottedBackground';
import { usePodcastSummary } from '../hooks/usePodcastSummary';
import type { AudioSource } from '../types/podcast';

export default function PodcastSummarizer() {
  const [url, setUrl] = useState('');
  const { isLoading, summary, error, processAudio } = usePodcastSummary();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      const source: AudioSource = { type: 'url', url };
      await processAudio(source);
    }
  };

  const handleFileUpload = async (file: File) => {
    const source: AudioSource = { type: 'upload', file };
    await processAudio(source);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <DottedBackground />
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <BackButton to="/" />
        </div>
        
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FileAudio className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Podcast Summarizer</h1>
          <p className="text-gray-600">Get AI-powered summaries of your favorite podcasts</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <UrlInput url={url} onChange={setUrl} />
            <div className="text-center text-sm text-gray-500">or</div>
            <FileUpload onFileSelect={handleFileUpload} />

            {error && (
              <div className="text-red-600 text-sm mt-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!url || isLoading}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-5 w-5 animate-spin" />
                  Summarizing...
                </>
              ) : (
                'Get Summary'
              )}
            </button>
          </form>
        </div>

        {summary && <SummaryDisplay summary={summary} />}
      </div>
    </div>
  );
}