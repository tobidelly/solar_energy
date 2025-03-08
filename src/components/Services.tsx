import React from 'react';
import { Sun, Battery, Wrench, Calculator, Zap, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: "Solar Panel Installation",
      description: "Professional installation of high-efficiency solar panels customized for your property"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-500" />,
      title: "Battery Storage Solutions",
      description: "Advanced battery systems to store excess energy for use during non-peak hours"
    },
    {
      icon: <Wrench className="h-12 w-12 text-yellow-500" />,
      title: "Maintenance & Repair",
      description: "Regular maintenance and prompt repair services to keep your system running optimally"
    },
    {
      icon: <Calculator className="h-12 w-12 text-yellow-500" />,
      title: "Energy Assessment",
      description: "Comprehensive energy usage analysis and custom solution design"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Automatic Power Switching",
      description: "Smart switching systems for seamless power management"
    },
    {
      icon: <Shield className="h-12 w-12 text-yellow-500" />,
      title: "Warranty & Support",
      description: "Extended warranty coverage and 24/7 customer support"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solar solutions for homes and businesses</p>
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