import { useRef, useState } from 'react';
import { Upload, FileText, Image } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  isProcessing: boolean;
}

export const FileUpload = ({ onFileSelect, isProcessing }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (validTypes.includes(file.type)) {
      onFileSelect(file);
    } else {
      alert('Please upload a valid image (JPG, PNG) or PDF file');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all ${
          dragActive
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
        } ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/jpeg,image/jpg,image/png,application/pdf"
          onChange={handleChange}
          disabled={isProcessing}
        />

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
              <Image className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
              <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Upload Your Lab Report
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Drag and drop or click to browse
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Supports PDF, JPG, PNG formats
            </p>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Select File'}
          </button>
        </div>
      </div>
    </div>
  );
};
