import { API_CONFIG } from '../config/api';

export async function transcribeAudio(audioFile: File): Promise<string> {
  if (!API_CONFIG.assemblyAiKey) {
    throw new Error('AssemblyAI API key is not configured');
  }

  try {
    // First, upload the file
    const uploadResponse = await fetch('https://api.assemblyai.com/v2/upload', {
      method: 'POST',
      headers: {
        'Authorization': API_CONFIG.assemblyAiKey,
      },
      body: audioFile,
    });

    if (!uploadResponse.ok) {
      throw new Error('Failed to upload audio file');
    }

    const { upload_url } = await uploadResponse.json();

    // Then, submit for transcription
    const transcriptResponse = await fetch('https://api.assemblyai.com/v2/transcript', {
      method: 'POST',
      headers: {
        'Authorization': API_CONFIG.assemblyAiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        audio_url: upload_url,
      }),
    });

    if (!transcriptResponse.ok) {
      throw new Error('Failed to start transcription');
    }

    const { id } = await transcriptResponse.json();

    // Poll for completion
    while (true) {
      const pollingResponse = await fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
        headers: {
          'Authorization': API_CONFIG.assemblyAiKey,
        },
      });

      if (!pollingResponse.ok) {
        throw new Error('Failed to check transcription status');
      }

      const transcript = await pollingResponse.json();

      if (transcript.status === 'completed') {
        return transcript.text;
      } else if (transcript.status === 'error') {
        throw new Error('Transcription failed: ' + transcript.error);
      }

      // Wait 1 second before polling again
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error('Transcription error:', error);
    throw new Error('Failed to transcribe audio. Please try again.');
  }
}