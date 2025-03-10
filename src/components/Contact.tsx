import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">Get in touch with our solar experts</p>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">1-800-BOLTY-ENERGY</p>
                    <p className="text-gray-300">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">info@boltyenergy.com</p>
                    <p className="text-gray-300">support@boltyenergy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300">123 Solar Street</p>
                    <p className="text-gray-300">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-300">Saturday: 9am - 3pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Emergency Service</h3>
              <p className="text-white mb-4">24/7 emergency support available for critical system issues</p>
              <a href="tel:1-800-SOLAR-PRO" className="inline-flex items-center text-white font-semibold">
                <Phone className="h-5 w-5 mr-2" />
                Call Emergency Line
              </a>
            </div>
          </div>

          <form className="bg-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500">
                  <option>General Inquiry</option>
                  <option>Installation Quote</option>
                  <option>Technical Support</option>
                  <option>Emergency Service</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}