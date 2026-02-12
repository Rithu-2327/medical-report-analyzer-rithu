import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FileUpload } from './components/FileUpload';
import { ProcessingIndicator } from './components/ProcessingIndicator';
import { ResultsTable } from './components/ResultsTable';
import { HealthInsights } from './components/HealthInsights';
import { InfoSections } from './components/InfoSections';
import { Report, TestResult } from './types/medical';
import { extractTextFromImage, parseTestResults } from './utils/ocr';
import { storageUtils } from './utils/storage';
import { RefreshCw } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [textSize, setTextSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentReport, setCurrentReport] = useState<Report | null>(null);
  const [previousReports, setPreviousReports] = useState<Report[]>([]);

  useEffect(() => {
    const settings = storageUtils.getSettings();
    setDarkMode(settings.darkMode);
    setTextSize(settings.textSize);
    setPreviousReports(storageUtils.getReports());

    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    storageUtils.saveSettings({ darkMode: newDarkMode, textSize });

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleTextSizeChange = (size: 'small' | 'medium' | 'large') => {
    setTextSize(size);
    storageUtils.saveSettings({ darkMode, textSize: size });
  };

  const handleFileSelect = async (file: File) => {
    setIsProcessing(true);
    setProgress(0);

    try {
      const text = await extractTextFromImage(file, (p) => setProgress(p));

      const results = parseTestResults(text);

      if (results.length === 0) {
        alert('No medical test values found. Please ensure the report is clear and contains supported tests.');
        setIsProcessing(false);
        return;
      }

      const report: Report = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        fileName: file.name,
        results,
      };

      setCurrentReport(report);
      storageUtils.saveReport(report);
      setPreviousReports(storageUtils.getReports());
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing file. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleResultUpdate = (updatedResults: TestResult[]) => {
    if (currentReport) {
      const updatedReport = { ...currentReport, results: updatedResults };
      setCurrentReport(updatedReport);
      storageUtils.updateReport(currentReport.id, updatedResults);
      setPreviousReports(storageUtils.getReports());
    }
  };

  const handleNewReport = () => {
    setCurrentReport(null);
    setProgress(0);
  };

  const getTextSizeClass = () => {
    switch (textSize) {
      case 'small':
        return 'text-sm';
      case 'large':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors ${getTextSizeClass()}`}>
      <Header
        darkMode={darkMode}
        textSize={textSize}
        onToggleDarkMode={handleToggleDarkMode}
        onTextSizeChange={handleTextSizeChange}
      />

      <main className="py-12 px-4">
        {!isProcessing && !currentReport && (
          <>
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Transform Lab Reports into Clear Insights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Upload your medical lab reports and get instant, easy-to-understand analysis with trend tracking
              </p>
            </div>
            <FileUpload onFileSelect={handleFileSelect} isProcessing={isProcessing} />
          </>
        )}

        {isProcessing && <ProcessingIndicator progress={progress} />}

        {!isProcessing && currentReport && (
          <div className="space-y-8">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Analysis Results
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Report: {currentReport.fileName} | Date: {new Date(currentReport.date).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={handleNewReport}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Analyze New Report
              </button>
            </div>

            <HealthInsights results={currentReport.results} />

            <ResultsTable
              results={currentReport.results}
              onResultUpdate={handleResultUpdate}
              previousReports={previousReports.filter(r => r.id !== currentReport.id)}
            />
          </div>
        )}
      </main>

      {!isProcessing && !currentReport && <InfoSections />}

      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p className="mb-2">Medical Report Analyzer - Privacy-First Health Insights</p>
          <p className="text-sm">
            All data is stored locally in your browser. No accounts, no cloud storage, complete privacy.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
