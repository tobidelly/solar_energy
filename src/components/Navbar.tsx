import React, { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">BoltyEnergy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-yellow-500">Services</a>
            <a href="#quotes" className="text-gray-600 hover:text-yellow-500">Get Quote</a>
            <a href="#products" className="text-gray-600 hover:text-yellow-500">Products</a>

            {/* Shop Link (Fixed) */}
            <Link to="/shop" className="text-gray-600 hover:text-yellow-500 flex items-center">
              Shop
              <span className="ml-1 text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">NG</span>
            </Link>

            {/* Solar Tools Link (Fixed & Added to Desktop) */}
            <Link to="/solar-tools" className="text-gray-600 hover:text-yellow-500 flex items-center">
              Solar Tools
            </Link>

            <a href="#gallery" className="text-gray-600 hover:text-yellow-500">Gallery</a>
            <a href="#contact" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-yellow-500">Services</a>
              <a href="#quotes" className="block px-3 py-2 text-gray-600 hover:text-yellow-500">Get Quote</a>
              <a href="#products" className="block px-3 py-2 text-gray-600 hover:text-yellow-500">Products</a>

              {/* Shop Link (Fixed) */}
              <Link to="/shop" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 flex items-center">
                Shop
                <span className="ml-1 text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">NG</span>
              </Link>

              {/* Solar Tools Link (Fixed) */}
              <Link to="/solar-tools" className="block px-3 py-2 text-gray-600 hover:text-yellow-500 flex items-center">
                Solar Tools
              </Link>

              <a href="#gallery" className="block px-3 py-2 text-gray-600 hover:text-yellow-500">Gallery</a>
              <a href="#contact" className="block px-3 py-2 bg-yellow-500 text-white rounded-md">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
