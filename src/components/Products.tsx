import React from 'react';
import { Zap, Shield, Battery, Wifi } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Smart Power Management Solutions</h2>
          <p className="text-xl text-gray-300">Advanced automatic power switching systems for your home</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Automatic Power Switch Pro</h3>
            <div className="flex items-start mb-6">
              <img
                src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80"
                alt="Smart Switch"
                className="w-full rounded-lg"
              />
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                Seamless power transition
              </li>
              <li className="flex items-center text-gray-300">
                <Shield className="h-5 w-5 text-yellow-500 mr-2" />
                Surge protection
              </li>
              <li className="flex items-center text-gray-300">
                <Battery className="h-5 w-5 text-yellow-500 mr-2" />
                Battery monitoring
              </li>
              <li className="flex items-center text-gray-300">
                <Wifi className="h-5 w-5 text-yellow-500 mr-2" />
                Smart home integration
              </li>
            </ul>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold">
              Order Now - $599
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Smart Circuit Breaker Elite</h3>
            <div className="flex items-start mb-6">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
                alt="Circuit Breaker"
                className="w-full rounded-lg"
              />
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                Intelligent load management
              </li>
              <li className="flex items-center text-gray-300">
                <Shield className="h-5 w-5 text-yellow-500 mr-2" />
                Advanced protection features
              </li>
              <li className="flex items-center text-gray-300">
                <Battery className="h-5 w-5 text-yellow-500 mr-2" />
                Energy monitoring
              </li>
              <li className="flex items-center text-gray-300">
                <Wifi className="h-5 w-5 text-yellow-500 mr-2" />
                Mobile app control
              </li>
            </ul>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold">
              Order Now - $799
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}