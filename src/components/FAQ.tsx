import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the automatic power switcher work?",
      answer: "Our automatic power switcher continuously monitors your power sources and seamlessly switches between solar, battery, and grid power based on availability and efficiency. It ensures uninterrupted power supply while maximizing solar energy usage."
    },
    {
      question: "What is the installation process like?",
      answer: "The installation process typically takes 1-2 days. Our certified technicians will assess your property, install the solar panels, set up the battery system, and configure the automatic switcher. We handle all permits and inspections."
    },
    {
      question: "How much can I save with solar power?",
      answer: "Savings vary based on your energy consumption, location, and current electricity rates. On average, our customers save 50-70% on their monthly electricity bills. We provide detailed savings estimates during consultation."
    },
    {
      question: "What maintenance is required?",
      answer: "Our systems require minimal maintenance. We recommend annual inspections to ensure optimal performance. The automatic switcher performs self-diagnostics and receives regular software updates automatically."
    },
    {
      question: "What warranty coverage is provided?",
      answer: "We offer comprehensive warranty coverage: 25 years for solar panels, 10 years for batteries, and 5 years for the automatic switcher. All installations are backed by our workmanship warranty."
    },
    {
      question: "Are there any tax incentives available?",
      answer: "Yes, solar installations qualify for federal tax credits and various state incentives. Our team will help you identify all available incentives and assist with the application process."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our solar solutions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}