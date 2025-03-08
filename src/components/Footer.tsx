import React from "react";
import { Link } from "react-router-dom";
import { Sun, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-white">BoltyEnergy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the way in solar technology and sustainable energy solutions.
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
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li>
                <Link 
                  to="/shop" 
                  className="hover:text-white flex items-center"
                >
                  Shop
                  <span className="ml-1 text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">NG</span>
                </Link>
                <Link 
                  to="/solar-tools" 
                  className="hover:text-white flex items-center"
                >
                  Solar Tools
                </Link>
              </li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Solar Installation</a></li>
              <li><a href="#" className="hover:text-white">Battery Storage</a></li>
              <li><a href="#" className="hover:text-white">Power Management</a></li>
              <li><a href="#" className="hover:text-white">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>123 Solar Street</li>
              <li>Lagos, Nigeria</li>
              <li>+234 800-SOLAR-PRO</li>
              <li>info@solartechpro.ng</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Bolty Technologies Limited. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
