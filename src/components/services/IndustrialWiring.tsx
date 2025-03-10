import React from 'react';
import { Zap, ArrowLeft, CheckCircle, Shield, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function IndustrialWiring() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-900 px-8 py-16 text-center">
              <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">Industrial Electrical Wiring & Installation</h1>
              <p className="text-xl text-gray-300">Professional industrial electrical solutions for your facility</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Complete industrial wiring installation
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Electrical system upgrades
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Safety compliance assessment
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Preventive maintenance
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Safety First</h3>
                        <p className="text-gray-600">Strict adherence to safety standards and regulations</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Tool className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Expert Team</h3>
                        <p className="text-gray-600">Certified professionals with industrial experience</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold">Manufacturing</h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold">Warehouses</h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold">Data Centers</h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold">Processing Plants</h3>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-800 mb-4">
                    Need industrial electrical wiring services? Contact us for a detailed assessment.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
