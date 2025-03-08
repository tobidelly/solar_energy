import React from 'react';
import { Sun, Battery, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
          alt="Solar Panels"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powering Your Future With Solar Energy
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your energy consumption with our cutting-edge solar solutions and smart power management systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quotes" className="bg-yellow-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition-colors">
                Get Free Quote
              </a>
              <a href="#products" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                View Products
              </a>
            </div>
          </div>
          
          <div className="hidden lg:grid grid-cols-2 gap-6 mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Sun className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Solar Installation</h3>
              <p className="text-gray-300">Professional installation of high-efficiency solar panels</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Battery className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Battery Storage</h3>
              <p className="text-gray-300">Advanced battery systems for 24/7 power supply</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Switching</h3>
              <p className="text-gray-300">Automatic power management and switching systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}