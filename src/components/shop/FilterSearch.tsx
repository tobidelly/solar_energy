import React, { useState } from "react";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";

interface FilterSearchProps {
  onSearch: (query: string) => void;
  onFilter: (category: string, priceRange: string) => void;
}

export default function FilterSearch({ onSearch, onFilter }: FilterSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = () => {
    onFilter(category, priceRange);
    setIsFilterOpen(false);
  };

  const handleReset = () => {
    setCategory("all");
    setPriceRange("all");
    onFilter("all", "all");
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-8">
      <div className="p-4">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search for solar products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-600 font-medium"
          >
            Search
          </button>
        </form>

        {/* Filter Toggle Button */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center text-gray-600 hover:text-yellow-500"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </button>
          {(category !== "all" || priceRange !== "all") && (
            <button
              onClick={handleReset}
              className="text-gray-500 hover:text-gray-700 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Reset Filters
            </button>
          )}
        </div>

        {/* Filter Options */}
        {isFilterOpen && (
          <div className="mt-4 grid md:grid-cols-2 gap-4 border-t pt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  handleFilterChange();
                }}
                className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="solar-panels">Solar Panels</option>
                <option value="batteries">Batteries</option>
                <option value="inverters">Inverters</option>
                <option value="lighting">Lighting</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => {
                  setPriceRange(e.target.value);
                  handleFilterChange();
                }}
                className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-100">Under $100</option>
                <option value="100-500">$100 - $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="above-5000">Above $5,000</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {(category !== "all" || priceRange !== "all") && (
        <div className="bg-gray-50 px-4 py-3 border-t flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active Filters:</span>
          {category !== "all" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
              {category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              <button
                onClick={() => {
                  setCategory("all");
                  handleFilterChange();
                }}
                className="ml-2 hover:text-yellow-900"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          {priceRange !== "all" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
              {priceRange.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              <button
                onClick={() => {
                  setPriceRange("all");
                  handleFilterChange();
                }}
                className="ml-2 hover:text-yellow-900"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}