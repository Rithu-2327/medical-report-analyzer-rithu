export interface TestResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  normalRange: string;
  status: 'normal' | 'high' | 'low';
  category: string;
}

export interface Report {
  id: string;
  date: string;
  fileName: string;
  results: TestResult[];
}

export interface MedicalTest {
  name: string;
  category: string;
  unit: string;
  normalRange: {
    min?: number;
    max?: number;
    text: string;
  };
  description: string;
  highAdvice: string;
  lowAdvice: string;
  keywords: string[];
}

export type TrendDirection = 'up' | 'down' | 'stable' | 'new';
