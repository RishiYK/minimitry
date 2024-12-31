import mammoth from 'mammoth';

export async function extractTextFromWord(file: File): Promise<string> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value.trim();
  } catch (error) {
    console.error('Word processing error:', error);
    throw new Error('Failed to process Word document. Please ensure it\'s a valid .doc or .docx file.');
  }
}