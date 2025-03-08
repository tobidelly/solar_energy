import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, PayPal, and Apple Pay.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.',
  },
  {
    question: 'Can I return or exchange an item?',
    answer: 'Yes, we have a 30-day return policy. Please check our returns page for details.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide! Shipping times and costs may vary by location.',
  },
];

export default function ShopFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md">
              <button
                className="flex justify-between items-center w-full text-lg font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openIndex === index && <p className="mt-3 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
