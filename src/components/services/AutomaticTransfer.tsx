import React from 'react';
import { RefreshCcw, ArrowLeft, CheckCircle, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function AutomaticTransfer() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-yellow-500 hover:text-yellow-600 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-900 px-8 py-16 text-center">
              <RefreshCcw className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">Automatic Transfer Switch (ATS)</h1>
              <p className="text-xl text-gray-300">Seamless power switching for uninterrupted operations</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">System Features</h2>
                  <ul className="space-y-3">
                    {[
                      "Automatic power source switching",
                      "Real-time monitoring and alerts",
                      "Customizable switching parameters",
                      "Emergency backup integration"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                  <ul className="space-y-4">
                    {[{ 
                        title: "Zero Downtime", 
                        desc: "Maintain continuous power supply to critical systems", 
                        icon: <Zap className="h-6 w-6 text-yellow-500 mr-3 mt-1" /> 
                      }, {
                        title: "Smart Management", 
                        desc: "Intelligent power source selection and management", 
                        icon: <Settings className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                      }].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        {benefit.icon}
                        <div>
                          <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Process</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {["Site Assessment", "Installation", "Testing"].map((step, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <span className="text-yellow-600 font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{step}</h3>
                      <p className="text-gray-600 text-sm">
                        {index === 0 ? "Evaluate your power requirements" :
                        index === 1 ? "Professional ATS setup" :
                        "Comprehensive system testing"}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-800 mb-4">
                    Ready to install an Automatic Transfer Switch? Get in touch for expert consultation.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
