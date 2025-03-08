import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Facebook, Twitter, Instagram, Linkedin, ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';

export default function ShopFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-white">SolarShop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted source for high-quality solar products and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-white">Shop Home</Link></li>
              <li><Link to="/shop/cart" className="hover:text-white">Shopping Cart</Link></li>
              <li><Link to="/" className="hover:text-white">Main Website</Link></li>
              <li><Link to="/solar-tools" className="hover:text-white">Solar Tools</Link></li>
              <li><a href="#contact-shop" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Solar Panels</a></li>
              <li><a href="#" className="hover:text-white">Batteries</a></li>
              <li><a href="#" className="hover:text-white">Inverters</a></li>
              <li><a href="#" className="hover:text-white">LED Lighting</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                <span>123 Solar Street, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                <span>+234 800-SOLAR-PRO</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                <span>shop@solartechpro.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} SolarTech Pro Shop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Shipping Policy</a>
              <a href="#" className="hover:text-white">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}