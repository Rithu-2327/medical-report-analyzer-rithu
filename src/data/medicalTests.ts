import { MedicalTest } from '../types/medical';

export const medicalTests: MedicalTest[] = [
  {
    name: 'Fasting Blood Sugar',
    category: 'Blood Sugar & Diabetes',
    unit: 'mg/dL',
    normalRange: { min: 70, max: 100, text: '70-100' },
    description: 'Measures blood glucose after 8+ hours of fasting',
    highAdvice: 'Reduce sugar intake, exercise regularly, and consult a doctor',
    lowAdvice: 'Eat small frequent meals, include complex carbs',
    keywords: ['fasting', 'fbs', 'glucose', 'blood sugar', 'fasting glucose']
  },
  {
    name: 'PPBS',
    category: 'Blood Sugar & Diabetes',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 140, text: '<140' },
    description: 'Post-meal blood sugar (2 hours after eating)',
    highAdvice: 'Monitor carb intake, exercise after meals',
    lowAdvice: 'Avoid skipping meals, eat balanced diet',
    keywords: ['ppbs', 'post prandial', 'pp', '2hr', 'post meal']
  },
  {
    name: 'Random Blood Sugar',
    category: 'Blood Sugar & Diabetes',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 140, text: '<140' },
    description: 'Blood sugar taken at any time of day',
    highAdvice: 'Check fasting levels, consult doctor',
    lowAdvice: 'Eat regular meals, monitor symptoms',
    keywords: ['rbs', 'random', 'casual']
  },
  {
    name: 'HbA1c',
    category: 'Blood Sugar & Diabetes',
    unit: '%',
    normalRange: { min: 0, max: 5.7, text: '<5.7' },
    description: 'Average blood sugar over past 2-3 months',
    highAdvice: 'Requires medical attention, lifestyle changes needed',
    lowAdvice: 'Rare condition, ensure proper nutrition',
    keywords: ['hba1c', 'a1c', 'glycosylated', 'glycated']
  },
  {
    name: 'Total Cholesterol',
    category: 'Lipid Profile',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 200, text: '<200' },
    description: 'Overall cholesterol in blood',
    highAdvice: 'Reduce saturated fats, increase fiber, exercise',
    lowAdvice: 'Ensure adequate nutrition',
    keywords: ['total cholesterol', 'cholesterol', 'serum cholesterol']
  },
  {
    name: 'LDL',
    category: 'Lipid Profile',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 100, text: '<100' },
    description: 'Bad cholesterol that can clog arteries',
    highAdvice: 'Avoid trans fats, exercise, consider medication',
    lowAdvice: 'Generally not concerning',
    keywords: ['ldl', 'low density', 'bad cholesterol']
  },
  {
    name: 'HDL',
    category: 'Lipid Profile',
    unit: 'mg/dL',
    normalRange: { min: 40, max: 999, text: '>40' },
    description: 'Good cholesterol that protects the heart',
    highAdvice: 'Good sign, maintain healthy lifestyle',
    lowAdvice: 'Exercise more, include healthy fats like nuts',
    keywords: ['hdl', 'high density', 'good cholesterol']
  },
  {
    name: 'Triglycerides',
    category: 'Lipid Profile',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 150, text: '<150' },
    description: 'Type of fat in blood from food',
    highAdvice: 'Reduce sugar and alcohol, exercise regularly',
    lowAdvice: 'Generally not a concern',
    keywords: ['triglycerides', 'tg', 'trigs']
  },
  {
    name: 'VLDL',
    category: 'Lipid Profile',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 30, text: '<30' },
    description: 'Very low-density lipoprotein',
    highAdvice: 'Reduce carbs and alcohol, increase activity',
    lowAdvice: 'Not concerning',
    keywords: ['vldl', 'very low density']
  },
  {
    name: 'Hemoglobin',
    category: 'Complete Blood Count',
    unit: 'g/dL',
    normalRange: { min: 12, max: 16, text: '12-16' },
    description: 'Protein that carries oxygen in blood',
    highAdvice: 'Stay hydrated, check for underlying conditions',
    lowAdvice: 'Eat iron-rich foods, check for deficiency',
    keywords: ['hemoglobin', 'hb', 'hgb']
  },
  {
    name: 'RBC Count',
    category: 'Complete Blood Count',
    unit: 'million/μL',
    normalRange: { min: 4.5, max: 5.5, text: '4.5-5.5' },
    description: 'Red blood cells that carry oxygen',
    highAdvice: 'Stay hydrated, consult doctor',
    lowAdvice: 'Check for anemia, improve iron intake',
    keywords: ['rbc', 'red blood cell', 'erythrocyte']
  },
  {
    name: 'WBC Count',
    category: 'Complete Blood Count',
    unit: 'thousand/μL',
    normalRange: { min: 4, max: 11, text: '4-11' },
    description: 'White blood cells that fight infection',
    highAdvice: 'May indicate infection, consult doctor',
    lowAdvice: 'May indicate weak immunity, medical attention needed',
    keywords: ['wbc', 'white blood cell', 'leukocyte', 'tc']
  },
  {
    name: 'Platelets',
    category: 'Complete Blood Count',
    unit: 'thousand/μL',
    normalRange: { min: 150, max: 400, text: '150-400' },
    description: 'Cells that help blood clot',
    highAdvice: 'Monitor for clotting risk, consult doctor',
    lowAdvice: 'Risk of bleeding, seek medical attention',
    keywords: ['platelet', 'plt', 'thrombocyte']
  },
  {
    name: 'Hematocrit',
    category: 'Complete Blood Count',
    unit: '%',
    normalRange: { min: 36, max: 48, text: '36-48' },
    description: 'Percentage of blood volume that is red blood cells',
    highAdvice: 'Stay hydrated, check for conditions',
    lowAdvice: 'May indicate anemia, consult doctor',
    keywords: ['hematocrit', 'hct', 'pcv']
  },
  {
    name: 'SGPT/ALT',
    category: 'Liver Function Test',
    unit: 'U/L',
    normalRange: { min: 0, max: 40, text: '<40' },
    description: 'Liver enzyme indicating liver health',
    highAdvice: 'Avoid alcohol, fatty foods, consult doctor',
    lowAdvice: 'Generally not a concern',
    keywords: ['sgpt', 'alt', 'alanine']
  },
  {
    name: 'SGOT/AST',
    category: 'Liver Function Test',
    unit: 'U/L',
    normalRange: { min: 0, max: 40, text: '<40' },
    description: 'Enzyme found in liver and heart',
    highAdvice: 'Avoid alcohol, check for liver damage',
    lowAdvice: 'Not concerning',
    keywords: ['sgot', 'ast', 'aspartate']
  },
  {
    name: 'Bilirubin Total',
    category: 'Liver Function Test',
    unit: 'mg/dL',
    normalRange: { min: 0, max: 1.2, text: '<1.2' },
    description: 'Waste product from red blood cell breakdown',
    highAdvice: 'Check liver function, may cause jaundice',
    lowAdvice: 'Not concerning',
    keywords: ['bilirubin', 'total bilirubin']
  },
  {
    name: 'ALP',
    category: 'Liver Function Test',
    unit: 'U/L',
    normalRange: { min: 44, max: 147, text: '44-147' },
    description: 'Enzyme related to liver and bone',
    highAdvice: 'Check liver and bone health',
    lowAdvice: 'Rare, check nutrition',
    keywords: ['alp', 'alkaline phosphatase']
  },
  {
    name: 'Total Protein',
    category: 'Liver Function Test',
    unit: 'g/dL',
    normalRange: { min: 6, max: 8.3, text: '6-8.3' },
    description: 'Total protein in blood',
    highAdvice: 'Check for dehydration or inflammation',
    lowAdvice: 'May indicate malnutrition or liver issues',
    keywords: ['total protein', 'serum protein']
  },
  {
    name: 'Creatinine',
    category: 'Kidney Function Test',
    unit: 'mg/dL',
    normalRange: { min: 0.6, max: 1.2, text: '0.6-1.2' },
    description: 'Waste product filtered by kidneys',
    highAdvice: 'Check kidney function, stay hydrated',
    lowAdvice: 'May indicate low muscle mass',
    keywords: ['creatinine', 'serum creatinine']
  },
  {
    name: 'Urea',
    category: 'Kidney Function Test',
    unit: 'mg/dL',
    normalRange: { min: 15, max: 40, text: '15-40' },
    description: 'Waste from protein breakdown',
    highAdvice: 'Check kidney function, reduce protein if needed',
    lowAdvice: 'May indicate liver issues or low protein',
    keywords: ['urea', 'blood urea', 'bun']
  },
  {
    name: 'Uric Acid',
    category: 'Kidney Function Test',
    unit: 'mg/dL',
    normalRange: { min: 3.5, max: 7, text: '3.5-7' },
    description: 'Waste product that can cause gout',
    highAdvice: 'Reduce purine-rich foods, stay hydrated',
    lowAdvice: 'Generally not concerning',
    keywords: ['uric acid', 'urate']
  },
  {
    name: 'TSH',
    category: 'Thyroid Profile',
    unit: 'μIU/mL',
    normalRange: { min: 0.4, max: 4.0, text: '0.4-4.0' },
    description: 'Thyroid stimulating hormone',
    highAdvice: 'May indicate underactive thyroid, consult doctor',
    lowAdvice: 'May indicate overactive thyroid, medical attention needed',
    keywords: ['tsh', 'thyroid stimulating']
  },
  {
    name: 'T3',
    category: 'Thyroid Profile',
    unit: 'ng/dL',
    normalRange: { min: 80, max: 200, text: '80-200' },
    description: 'Active thyroid hormone',
    highAdvice: 'May indicate hyperthyroidism',
    lowAdvice: 'May indicate hypothyroidism',
    keywords: ['t3', 'triiodothyronine', 'total t3']
  },
  {
    name: 'T4',
    category: 'Thyroid Profile',
    unit: 'μg/dL',
    normalRange: { min: 4.5, max: 12, text: '4.5-12' },
    description: 'Main thyroid hormone',
    highAdvice: 'May indicate hyperthyroidism',
    lowAdvice: 'May indicate hypothyroidism',
    keywords: ['t4', 'thyroxine', 'total t4']
  }
];

export const categories = [
  'Blood Sugar & Diabetes',
  'Lipid Profile',
  'Complete Blood Count',
  'Liver Function Test',
  'Kidney Function Test',
  'Thyroid Profile'
];
