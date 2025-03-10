import React from 'react';
import { Wind, ArrowLeft, CheckCircle, Sun, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function RenewableEnergy() {
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
              <Wind className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">Renewable Energy System Design</h1>
              <p className="text-xl text-gray-300">Custom renewable energy solutions for a sustainable future</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Services</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Solar PV system design
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Wind energy integration
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Hybrid system planning
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Energy storage solutions
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Sun className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Solar Power</h3>
                        <p className="text-gray-600">Advanced photovoltaic solutions</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Battery className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Energy Storage</h3>
                        <p className="text-gray-600">Modern battery storage systems</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Process</h2>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Assessment</h3>
                    <p className="text-gray-600 text-sm">Site and needs evaluation</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Design</h3>
                    <p className="text-gray-600 text-sm">System planning</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Implementation</h3>
                    <p className="text-gray-600 text-sm">System installation</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold mb-2">Monitoring</h3>
                    <p className="text-gray-600 text-sm">Performance tracking</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-800 mb-4">
                    Ready to transition to renewable energy? Let's design your system.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    Start Design Process
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
