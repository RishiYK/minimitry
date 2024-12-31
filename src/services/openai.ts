import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function transcribeAudio(audioFile: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', audioFile);
  formData.append('model', 'whisper-1');

  const transcript = await openai.audio.transcriptions.create({
    file: audioFile,
    model: 'whisper-1',
  });

  return transcript.text;
}

export async function summarizeText(text: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a podcast summarizer. Create a concise summary of the following transcript.'
      },
      {
        role: 'user',
        content: text
      }
    ],
    temperature: 0.7,
    max_tokens: 500
  });

  return response.choices[0].message.content || '';
}