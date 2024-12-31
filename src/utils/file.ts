const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export function validateFileSize(file: File): void {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('File size exceeds 10MB limit');
  }
}

export function getFileExtension(filename: string): string {
  return filename.toLowerCase().split('.').pop() || '';
}