import React from 'react';
import { BarChart2, ArrowLeft, CheckCircle, Search, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function EnergyAudit() {
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
              <BarChart2 className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">Energy Audit & Consultation</h1>
              <p className="text-xl text-gray-300">Comprehensive energy assessment for optimal efficiency</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Audit Process</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Initial assessment and data collection
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Energy consumption analysis
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Efficiency recommendations
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Implementation planning
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Analyze</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Search className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Energy Usage Patterns</h3>
                        <p className="text-gray-600">Detailed analysis of consumption trends</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Cost Analysis</h3>
                        <p className="text-gray-600">Comprehensive review of energy expenses</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold mb-2">Cost Savings</h3>
                    <p className="text-gray-600 text-sm">Reduce energy expenses</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold mb-2">Efficiency</h3>
                    <p className="text-gray-600 text-sm">Optimize energy usage</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <h3 className="font-semibold mb-2">Sustainability</h3>
                    <p className="text-gray-600 text-sm">Reduce carbon footprint</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-800 mb-4">
                    Ready to optimize your energy consumption? Schedule an audit today.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    Schedule Audit
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
