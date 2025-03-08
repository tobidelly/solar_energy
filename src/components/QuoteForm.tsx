import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    monthlyBill: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="quotes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover how much you can save with our solar solutions. Fill out the form for a personalized quote and energy savings estimate.
            </p>
            <div className="bg-yellow-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-xl font-semibold text-yellow-900">Why Choose Us?</h3>
              </div>
              <ul className="space-y-3 text-yellow-800">
                <li>✓ Free, no-obligation quotes</li>
                <li>✓ Custom design for your property</li>
                <li>✓ ROI and savings calculation</li>
                <li>✓ Available financing options</li>
                <li>✓ Professional installation team</li>
              </ul>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Average Monthly Electric Bill</label>
                <input
                  type="number"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  value={formData.monthlyBill}
                  onChange={(e) => setFormData({...formData, monthlyBill: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
              >
                Get Free Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}