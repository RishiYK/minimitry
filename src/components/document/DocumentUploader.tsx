import React from 'react';
import { FileUp } from 'lucide-react';

interface DocumentUploaderProps {
  onFileSelect: (file: File) => void;
  disabled?: boolean;
}

export default function DocumentUploader({ onFileSelect, disabled }: DocumentUploaderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <label className={`flex flex-col items-center px-4 py-6 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <FileUp className="h-8 w-8 text-primary mb-2" />
      <span className="text-sm text-gray-600">Upload PDF or Word document</span>
      <span className="text-xs text-gray-500 mt-1">Maximum size: 10MB</span>
      <input
        type="file"
        className="hidden"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
}