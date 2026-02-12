import { Shield, Zap, BarChart3, HelpCircle, Upload, Search, LineChart } from 'lucide-react';

export const InfoSections = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Privacy First',
      description: 'All data stored locally in your browser. No accounts, no cloud storage.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: 'Lightning Fast',
      description: 'Get instant analysis of your lab reports with advanced OCR technology.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: 'Track Trends',
      description: 'Monitor your health metrics over time with visual trend indicators.'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      icon: <Upload className="w-6 h-6" />,
      title: 'Upload Report',
      description: 'Upload your lab report as PDF or image (PNG/JPG)'
    },
    {
      step: '2',
      icon: <Search className="w-6 h-6" />,
      title: 'Auto Extract',
      description: 'Our OCR technology extracts test values automatically'
    },
    {
      step: '3',
      icon: <LineChart className="w-6 h-6" />,
      title: 'Analyze & Track',
      description: 'View results, edit if needed, and track trends over time'
    }
  ];

  const faqs = [
    {
      question: 'Is my medical data secure?',
      answer: 'Yes! All your data is stored locally in your browser. We never upload your reports or data to any server.'
    },
    {
      question: 'What file formats are supported?',
      answer: 'We support PDF files and images in JPG and PNG formats. The report should be clear and readable for best results.'
    },
    {
      question: 'Can I edit the extracted values?',
      answer: 'Absolutely! Click the edit icon next to any value to manually correct it. This is helpful if OCR misreads something.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No account needed! We designed this to be simple and private. Just upload and analyze your reports instantly.'
    },
    {
      question: 'What tests are supported?',
      answer: 'We support common tests including Blood Sugar, Lipid Profile, CBC, Liver Function, Kidney Function, and Thyroid Profile.'
    },
    {
      question: 'Is this a replacement for medical advice?',
      answer: 'No. This tool provides informational insights only. Always consult with a qualified healthcare provider for medical decisions.'
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Why Choose Medical Report Analyzer?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple, fast, and secure way to understand your lab reports without medical jargon
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Three simple steps to understand your health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="text-blue-600">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-300 dark:bg-blue-700"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Impact Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Reports Analyzed</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-lg text-white text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-green-100">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-lg text-white text-center">
              <div className="text-5xl font-bold mb-2">5K+</div>
              <div className="text-purple-100">Active Users</div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
              >
                <summary className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white flex items-center justify-between">
                  {faq.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 py-4 text-gray-600 dark:text-gray-300 border-t dark:border-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
