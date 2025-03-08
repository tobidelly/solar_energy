import React from 'react';

export default function ShopHero() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80"
          alt="Solar Shop"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your One-Stop Solar Shop
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore top-quality solar products, batteries, and accessories at unbeatable prices. Power your home or business today!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#shop" className="bg-yellow-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition-colors">
                Start Shopping
              </a>
              <a href="#categories" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Browse Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
