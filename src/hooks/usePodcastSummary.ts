import { useState } from 'react';
import type { Summary, AudioSource } from '../types/podcast';
import { transcribeAudio } from '../services/transcription';
import { summarizeText } from '../services/summarizer';
import { validateApiConfig } from '../config/api';

export function usePodcastSummary() {
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processAudio = async (source: AudioSource) => {
    try {
      // Validate API configuration first
      const { isValid, missingKeys } = validateApiConfig();
      if (!isValid) {
        throw new Error(`Missing required API keys: ${missingKeys.join(', ')}`);
      }

      setIsLoading(true);
      setError(null);

      let transcript: string;

      if (source.type === 'upload') {
        transcript = await transcribeAudio(source.file);
      } else {
        const response = await fetch(source.url);
        const blob = await response.blob();
        const file = new File([blob], 'podcast.mp3', { type: 'audio/mpeg' });
        transcript = await transcribeAudio(file);
      }

      const summary = await summarizeText(transcript);
      
      setSummary({
        title: 'Podcast Summary',
        summary,
        duration: 'Generated from ' + (source.type === 'upload' ? 'uploaded file' : 'URL')
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, summary, error, processAudio };
}