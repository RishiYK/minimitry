import { validateFileSize, getFileExtension } from './file';
import { extractTextFromPDF } from './pdf';
import { extractTextFromWord } from './word';

export async function extractTextFromDocument(file: File): Promise<string> {
  try {
    validateFileSize(file);
    
    const extension = getFileExtension(file.name);
    
    switch (extension) {
      case 'pdf':
        return extractTextFromPDF(file);
      case 'doc':
      case 'docx':
        return extractTextFromWord(file);
      default:
        throw new Error('Unsupported file type. Please upload a PDF or Word document.');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred while processing the document.');
  }
}