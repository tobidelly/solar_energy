import React, { useState } from 'react';
import { Menu, X, ShoppingBag, ShoppingCart, Sun, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ShopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-12">
            <Link to="/shop" className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">SolarShop</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/shop" className="text-gray-600 hover:text-yellow-500 font-medium">Home</Link>
              <div className="relative group">
                <button className="text-gray-600 hover:text-yellow-500 font-medium flex items-center">
                  Categories
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
                  <Link to="/shop/category/solar-panels" className="block px-4 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500">Solar Panels</Link>
                  <Link to="/shop/category/batteries" className="block px-4 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500">Batteries</Link>
                  <Link to="/shop/category/inverters" className="block px-4 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500">Inverters</Link>
                  <Link to="/shop/category/accessories" className="block px-4 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500">Accessories</Link>
                </div>
              </div>
              <Link to="/shop/deals" className="text-gray-600 hover:text-yellow-500 font-medium">Deals</Link>
              <Link to="/shop/about" className="text-gray-600 hover:text-yellow-500 font-medium">About</Link>
              <Link to="/shop/contact" className="text-gray-600 hover:text-yellow-500 font-medium">Contact</Link>
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-yellow-500 font-medium">Main Site</Link>
              <Link to="/solar-tools" className="text-gray-600 hover:text-yellow-500 font-medium">Solar Tools</Link>
            </div>

            <Link 
              to="/shop/cart" 
              className="relative flex items-center text-gray-600 hover:text-yellow-500"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-gray-600 hover:text-yellow-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/shop" 
                className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500 rounded-md"
              >
                Home
              </Link>
              <div className="px-3 py-2 text-gray-600">
                <span className="block font-medium mb-1">Categories</span>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/shop/category/solar-panels" 
                    className="block py-1 text-gray-600 hover:text-yellow-500"
                  >
                    Solar Panels
                  </Link>
                  <Link 
                    to="/shop/category/batteries" 
                    className="block py-1 text-gray-600 hover:text-yellow-500"
                  >
                    Batteries
                  </Link>
                  <Link 
                    to="/shop/category/inverters" 
                    className="block py-1 text-gray-600 hover:text-yellow-500"
                  >
                    Inverters
                  </Link>
                  <Link 
                    to="/shop/category/accessories" 
                    className="block py-1 text-gray-600 hover:text-yellow-500"
                  >
                    Accessories
                  </Link>
                </div>
              </div>
              <Link 
                to="/shop/deals" 
                className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500 rounded-md"
              >
                Deals
              </Link>
              <Link 
                to="/shop/about" 
                className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500 rounded-md"
              >
                About
              </Link>
              <Link 
                to="/shop/contact" 
                className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500 rounded-md"
              >
                Contact
              </Link>
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500 rounded-md"
              >
                Main Site
              </Link>
              <Link 
                to="/solar-tools" 
                className="block px-3 py-2 text-gray-600 hover:bg-yellow-50 hover:text-yellow-500 rounded-md"
              >
                Solar Tools
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}