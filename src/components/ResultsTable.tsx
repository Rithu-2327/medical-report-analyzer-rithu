import { useState } from 'react';
import { TestResult, Report, TrendDirection } from '../types/medical';
import { medicalTests } from '../data/medicalTests';
import { Edit2, Check, X, TrendingUp, Info } from 'lucide-react';
import { calculateTrend, getTrendIcon, getTrendColor } from '../utils/trends';
import { determineStatus } from '../utils/ocr';

interface ResultsTableProps {
  results: TestResult[];
  onResultUpdate: (results: TestResult[]) => void;
  previousReports: Report[];
}

export const ResultsTable = ({
  results,
  onResultUpdate,
  previousReports,
}: ResultsTableProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const handleEdit = (result: TestResult) => {
    setEditingId(result.id);
    setEditValue(result.value.toString());
  };

  const handleSave = (result: TestResult) => {
    const newValue = parseFloat(editValue);
    if (!isNaN(newValue)) {
      const newStatus = determineStatus(newValue, result.testName);
      const updatedResults = results.map((r) =>
        r.id === result.id
          ? { ...r, value: newValue, status: newStatus }
          : r
      );
      onResultUpdate(updatedResults);
    }
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditValue('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'low':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    }
  };

  const getTrend = (result: TestResult): TrendDirection => {
    if (typeof result.value !== 'number') return 'new';
    return calculateTrend(result.value, result.testName, previousReports);
  };

  const getTestInfo = (testName: string) => {
    return medicalTests.find((t) => t.name === testName);
  };

  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, TestResult[]>);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {Object.entries(groupedResults).map(([category, categoryResults]) => (
        <div
          key={category}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              {category}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Test Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Normal Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Trend
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {categoryResults.map((result) => {
                  const trend = getTrend(result);
                  const isEditing = editingId === result.id;

                  return (
                    <tr
                      key={result.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {result.testName}
                          </span>
                          <button
                            onClick={() =>
                              setSelectedTest(
                                selectedTest === result.testName
                                  ? null
                                  : result.testName
                              )
                            }
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </div>
                        {selectedTest === result.testName && (
                          <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded text-sm text-gray-700 dark:text-gray-300">
                            {getTestInfo(result.testName)?.description}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-24 px-2 py-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            autoFocus
                          />
                        ) : (
                          <span className="text-gray-900 dark:text-white">
                            {result.value} {result.unit}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                        {result.normalRange} {result.unit}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            result.status
                          )}`}
                        >
                          {result.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`flex items-center gap-1 text-lg font-bold ${getTrendColor(
                            trend,
                            result.status
                          )}`}
                        >
                          {getTrendIcon(trend)}
                          <span className="text-xs font-normal">
                            {trend === 'new' ? 'New' : ''}
                          </span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {isEditing ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSave(result)}
                              className="text-green-600 hover:text-green-700 dark:text-green-400"
                            >
                              <Check className="w-5 h-5" />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="text-red-600 hover:text-red-700 dark:text-red-400"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEdit(result)}
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
