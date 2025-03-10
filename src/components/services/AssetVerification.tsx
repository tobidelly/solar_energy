import React from "react";
import { ClipboardCheck, ArrowLeft, CheckCircle, Search, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function AssetVerification() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to Home Link */}
          <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          {/* Card Container */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-gray-900 px-8 py-16 text-center">
              <ClipboardCheck className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">Asset Verification</h1>
              <p className="text-xl text-gray-300">
                Comprehensive electrical asset assessment and verification
              </p>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Verification Process */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Verification Process</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Physical asset inspection
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Documentation review
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Compliance assessment
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Performance testing
                    </li>
                  </ul>
                </div>

                {/* What We Verify */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Verify</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Search className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Equipment Status</h3>
                        <p className="text-gray-600">Condition and operational assessment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Documentation</h3>
                        <p className="text-gray-600">Maintenance records and certifications</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Verification Steps */}
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Verification Steps</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Initial Assessment</h3>
                    <p className="text-gray-600 text-sm">Comprehensive asset review</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Testing</h3>
                    <p className="text-gray-600 text-sm">Performance verification</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-yellow-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Reporting</h3>
                    <p className="text-gray-600 text-sm">Detailed documentation</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-800 mb-4">
                    Need a comprehensive asset verification? Contact us to schedule an assessment.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    Schedule Verification
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
