import { mistralClient, validateApiKey } from './mistralClient';
import { fileToBase64 } from './audio';

export async function transcribeAudio(audioFile: File): Promise<string> {
  if (!validateApiKey()) {
    throw new Error('Mistral API key is not configured');
  }

  try {
    const base64Audio = await fileToBase64(audioFile);

    const response = await mistralClient.chat({
      model: 'mistral-large-latest',
      messages: [
        {
          role: 'system',
          content: 'You are a transcription assistant. Please transcribe the following audio content.'
        },
        {
          role: 'user',
          content: base64Audio
        }
      ]
    });

    if (!response.choices?.[0]?.message?.content) {
      throw new Error('Invalid response from Mistral API');
    }

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Transcription error:', error);
    throw new Error('Failed to transcribe audio. Please try again.');
  }
}