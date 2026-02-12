import { Moon, Sun, Type, Activity } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  textSize: 'small' | 'medium' | 'large';
  onToggleDarkMode: () => void;
  onTextSizeChange: (size: 'small' | 'medium' | 'large') => void;
}

export const Header = ({
  darkMode,
  textSize,
  onToggleDarkMode,
  onTextSizeChange,
}: HeaderProps) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Medical Report Analyzer
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Understand your health, simplified
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => onTextSizeChange('small')}
                className={`p-2 rounded transition-colors ${
                  textSize === 'small'
                    ? 'bg-white dark:bg-gray-600 shadow'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title="Small text"
              >
                <Type className="w-4 h-4 dark:text-white" />
              </button>
              <button
                onClick={() => onTextSizeChange('medium')}
                className={`p-2 rounded transition-colors ${
                  textSize === 'medium'
                    ? 'bg-white dark:bg-gray-600 shadow'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title="Medium text"
              >
                <Type className="w-5 h-5 dark:text-white" />
              </button>
              <button
                onClick={() => onTextSizeChange('large')}
                className={`p-2 rounded transition-colors ${
                  textSize === 'large'
                    ? 'bg-white dark:bg-gray-600 shadow'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title="Large text"
              >
                <Type className="w-6 h-6 dark:text-white" />
              </button>
            </div>

            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
