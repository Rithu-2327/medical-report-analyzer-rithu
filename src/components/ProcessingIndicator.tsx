import { Loader2 } from 'lucide-react';

interface ProcessingIndicatorProps {
  progress: number;
}

export const ProcessingIndicator = ({ progress }: ProcessingIndicatorProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="flex flex-col items-center gap-6">
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Analyzing Your Report
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Extracting medical data using OCR technology...
          </p>
        </div>

        <div className="w-full">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full text-center">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
              Scanning
            </div>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">2</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
              Extracting
            </div>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
              Analyzing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
