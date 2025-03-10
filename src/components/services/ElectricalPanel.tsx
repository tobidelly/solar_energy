import React from 'react';
import { Settings, ArrowLeft, CheckCircle, AlertTriangle, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ElectricalPanel() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-900 px-8 py-16 text-center">
              <Settings className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">Electrical Panel Design & Installation</h1>
              <p className="text-xl text-gray-300">Expert electrical panel solutions for your power distribution needs</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
                  <p className="text-gray-600 mb-4">
                    We provide comprehensive electrical panel solutions, from initial design to final installation. Our team ensures your electrical distribution system is efficient, safe, and compliant with all regulations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Custom panel design based on your needs
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Professional installation by certified technicians
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Regular maintenance and upgrades
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Tool className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Custom Design</h3>
                        <p className="text-gray-600">Tailored solutions for your specific requirements</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Safety First</h3>
                        <p className="text-gray-600">Built-in safety features and protection systems</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h2>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-800 mb-4">
                    Ready to upgrade your electrical panel? Contact us for a consultation and free quote.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
