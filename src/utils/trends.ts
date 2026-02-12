import { Report, TestResult, TrendDirection } from '../types/medical';

export const calculateTrend = (
  currentValue: number,
  testName: string,
  previousReports: Report[]
): TrendDirection => {
  if (previousReports.length === 0) return 'new';

  const previousValues: number[] = [];

  for (const report of previousReports) {
    const matchingTest = report.results.find(r => r.testName === testName);
    if (matchingTest && typeof matchingTest.value === 'number') {
      previousValues.push(matchingTest.value);
    }
  }

  if (previousValues.length === 0) return 'new';

  const lastValue = previousValues[previousValues.length - 1];
  const difference = currentValue - lastValue;
  const percentChange = Math.abs((difference / lastValue) * 100);

  if (percentChange < 5) return 'stable';

  return difference > 0 ? 'up' : 'down';
};

export const getTrendIcon = (trend: TrendDirection): string => {
  switch (trend) {
    case 'up': return '↑';
    case 'down': return '↓';
    case 'stable': return '→';
    case 'new': return '●';
  }
};

export const getTrendColor = (trend: TrendDirection, status: string): string => {
  if (trend === 'new') return 'text-blue-600';
  if (trend === 'stable') return 'text-gray-600';

  if (status === 'high') {
    return trend === 'down' ? 'text-green-600' : 'text-red-600';
  } else if (status === 'low') {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  }

  return 'text-gray-600';
};
