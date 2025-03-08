import React from 'react';
import { Battery, Zap, DollarSign, Clock } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Automatic Switcher?</h2>
          <p className="text-xl text-gray-600">Smart power management that saves you money and provides peace of mind</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-6 inline-block mb-6">
              <Zap className="h-12 w-12 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Seamless Switching</h3>
            <p className="text-gray-600">Automatic power transition between grid and solar in milliseconds</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-6 inline-block mb-6">
              <Battery className="h-12 w-12 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Battery Optimization</h3>
            <p className="text-gray-600">Intelligent battery management for longer life and better performance</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-6 inline-block mb-6">
              <DollarSign className="h-12 w-12 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Savings</h3>
            <p className="text-gray-600">Reduce electricity bills with smart power management</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-6 inline-block mb-6">
              <Clock className="h-12 w-12 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Monitoring</h3>
            <p className="text-gray-600">Real-time system monitoring and instant notifications</p>
          </div>
        </div>

        <div className="mt-16 bg-yellow-50 rounded-lg p-8">
          <div className="lg:grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  <span>Smart load balancing between solar and grid power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  <span>Surge protection and voltage regulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  <span>Mobile app for remote monitoring and control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold mr-2">✓</span>
                  <span>Automatic firmware updates and system optimization</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1592833189000-69c0f624e28a?auto=format&fit=crop&q=80"
                alt="Smart Power Management"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}