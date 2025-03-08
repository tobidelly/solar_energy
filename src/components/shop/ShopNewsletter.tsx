import React from "react";
import { Mail } from "lucide-react";

export default function ShopNewsletter() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
        <p className="text-lg text-gray-300 mb-6">
          Subscribe to get the latest updates on new arrivals, exclusive deals, and more!
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-auto flex-grow">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-yellow-500 focus:border-yellow-500"
            />
            <Mail className="absolute right-4 top-3 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
