import React from 'react';
import { Settings, RefreshCcw, Zap, BarChart2, Wind, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-yellow-500" />, 
      title: "Electrical Panel Design & Installation",
      description: "Expert design and installation of electrical panels tailored to your needs."
    },
    {
      icon: <RefreshCcw className="h-12 w-12 text-yellow-500" />, 
      title: "Automatic Transfer Switch (ATS)",
      description: "Seamless power switching solutions for uninterrupted operations."
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />, 
      title: "Industrial Electrical Wiring & Installation",
      description: "Safe and efficient industrial electrical wiring solutions."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-yellow-500" />, 
      title: "Energy Audit & Consultation",
      description: "Comprehensive energy assessments to optimize consumption and efficiency."
    },
    {
      icon: <Wind className="h-12 w-12 text-yellow-500" />, 
      title: "Renewable Energy System Design",
      description: "Custom renewable energy solutions for sustainability."
    },
    {
      icon: <ClipboardCheck className="h-12 w-12 text-yellow-500" />, 
      title: "Asset Verification",
      description: "Detailed verification and assessment of electrical assets."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Providing expert electrical solutions for industrial and commercial needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
