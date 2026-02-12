import Tesseract from 'tesseract.js';
import { medicalTests } from '../data/medicalTests';
import { TestResult } from '../types/medical';

export const extractTextFromImage = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<string> => {
  const result = await Tesseract.recognize(file, 'eng', {
    logger: (m) => {
      if (m.status === 'recognizing text' && onProgress) {
        onProgress(Math.round(m.progress * 100));
      }
    },
  });

  return result.data.text;
};

export const parseTestResults = (text: string): TestResult[] => {
  const results: TestResult[] = [];
  const lines = text.toLowerCase().split('\n');

  medicalTests.forEach(test => {
    for (const line of lines) {
      const matchedKeyword = test.keywords.find(keyword =>
        line.includes(keyword.toLowerCase())
      );

      if (matchedKeyword) {
        const numberMatches = line.match(/(\d+\.?\d*)/g);

        if (numberMatches && numberMatches.length > 0) {
          const value = parseFloat(numberMatches[0]);

          let status: 'normal' | 'high' | 'low' = 'normal';

          if (test.normalRange.min !== undefined && value < test.normalRange.min) {
            status = 'low';
          } else if (test.normalRange.max !== undefined && value > test.normalRange.max) {
            status = 'high';
          }

          if (test.name === 'HDL' && value < test.normalRange.min!) {
            status = 'low';
          }

          results.push({
            id: `${test.name}-${Date.now()}`,
            testName: test.name,
            value,
            unit: test.unit,
            normalRange: test.normalRange.text,
            status,
            category: test.category
          });

          break;
        }
      }
    }
  });

  return results;
};

export const determineStatus = (
  value: number,
  testName: string
): 'normal' | 'high' | 'low' => {
  const test = medicalTests.find(t => t.name === testName);

  if (!test) return 'normal';

  if (testName === 'HDL') {
    if (value < test.normalRange.min!) return 'low';
    return 'normal';
  }

  if (test.normalRange.min !== undefined && value < test.normalRange.min) {
    return 'low';
  }

  if (test.normalRange.max !== undefined && value > test.normalRange.max) {
    return 'high';
  }

  return 'normal';
};
