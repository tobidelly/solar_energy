import React from 'react';
import { Phone, Mail, MapPin, Clock, ShoppingBag, Send } from 'lucide-react';

export default function ContactShop() {
  return (
    <section id="contact-shop" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShoppingBag className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Contact Our Shop</h2>
          <p className="text-xl text-gray-300">We're here to help with your solar equipment needs</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Shop Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone Support</h4>
                    <p className="text-gray-300">+234 800-SOLAR-PRO</p>
                    <p className="text-gray-300">Available Mon-Sat: 9am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">shop@solartechpro.ng</p>
                    <p className="text-gray-300">support@solartechpro.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300">123 Solar Street</p>
                    <p className="text-gray-300">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-300">Saturday: 10am - 4pm</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Technical Support?</h3>
              <p className="mb-4">Our technical team is available to assist you with product specifications and installation guidance.</p>
              <a href="tel:+2348007627776" className="inline-flex items-center text-white font-semibold hover:text-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Call Technical Support
              </a>
            </div>
          </div>

          <form className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Order Number (if applicable)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Order #"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500">
                  <option>Product Inquiry</option>
                  <option>Order Status</option>
                  <option>Technical Support</option>
                  <option>Returns & Refunds</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
                  rows={4}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors font-semibold flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}