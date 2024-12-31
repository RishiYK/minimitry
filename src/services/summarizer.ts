import { mistralClient } from './mistralClient';
import { validateApiConfig } from '../config/api';

export async function summarizeText(text: string): Promise<string> {
  validateApiConfig();

  try {
    const response = await mistralClient.chat({
      model: 'mistral-medium',
      messages: [
        {
          role: 'system',
          content: 'You are a text summarizer. Create a concise summary focusing on the main points and key takeaways.'
        },
        {
          role: 'user',
          content: text
        }
      ]
    });

    if (!response.choices?.[0]?.message?.content) {
      throw new Error('Invalid response from Mistral API');
    }

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Summarization error:', error);
    throw new Error('Failed to generate summary. Please try again.');
  }
}