import { TestResult } from '../types/medical';
import { medicalTests } from '../data/medicalTests';
import { AlertCircle, CheckCircle, Heart } from 'lucide-react';

interface HealthInsightsProps {
  results: TestResult[];
}

export const HealthInsights = ({ results }: HealthInsightsProps) => {
  const abnormalResults = results.filter(r => r.status !== 'normal');
  const normalCount = results.length - abnormalResults.length;

  const getAdvice = (result: TestResult): string => {
    const test = medicalTests.find(t => t.name === result.testName);
    if (!test) return '';

    if (result.status === 'high') return test.highAdvice;
    if (result.status === 'low') return test.lowAdvice;
    return '';
  };

  const getOverallSummary = () => {
    if (abnormalResults.length === 0) {
      return {
        icon: <CheckCircle className="w-8 h-8 text-green-600" />,
        title: 'All Tests Within Normal Range',
        message: 'Great news! All your test results are within healthy ranges.',
        color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
      };
    }

    if (abnormalResults.length <= 2) {
      return {
        icon: <AlertCircle className="w-8 h-8 text-yellow-600" />,
        title: 'Minor Attention Needed',
        message: `${abnormalResults.length} test(s) show values outside normal range.`,
        color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
      };
    }

    return {
      icon: <AlertCircle className="w-8 h-8 text-red-600" />,
      title: 'Medical Consultation Recommended',
      message: `${abnormalResults.length} tests show abnormal values. Please consult your doctor.`,
      color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
    };
  };

  const summary = getOverallSummary();

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <div className={`border-2 rounded-lg p-6 ${summary.color}`}>
        <div className="flex items-start gap-4">
          {summary.icon}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 dark:text-white">{summary.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{summary.message}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="dark:text-white">
                  <strong>{normalCount}</strong> Normal Tests
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="dark:text-white">
                  <strong>{abnormalResults.length}</strong> Abnormal Tests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {abnormalResults.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-bold dark:text-white">Health Recommendations</h3>
          </div>

          <div className="space-y-4">
            {abnormalResults.map((result) => (
              <div
                key={result.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {result.testName}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Current: {result.value} {result.unit} (Normal: {result.normalRange} {result.unit})
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      result.status === 'high'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}
                  >
                    {result.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Suggestion:</strong> {getAdvice(result)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
          Important Medical Disclaimer
        </h4>
        <p className="text-sm text-blue-800 dark:text-blue-300">
          This platform provides informational insights only and should not be used as a substitute
          for professional medical advice, diagnosis, or treatment. Always consult with a qualified
          healthcare provider regarding any medical concerns or before making any decisions about
          your health.
        </p>
      </div>
    </div>
  );
};
