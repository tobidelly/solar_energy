import React from "react";
import ShopNavbar from "./ShopNavbar";
import ShopHero from "./ShopHero";
import ProductListing from "./ProductListing";
import FilterSearch from "./FilterSearch";
import ContactShop from "./ContactShop";
import ShopNewsletter from "./ShopNewsletter";
import ShopFooter from "./ShopFooter";
import ShopFAQs from "./ShopFAQs";

export default function Shop() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement search functionality
  };

  const handleFilter = (category: string, priceRange: string) => {
    console.log("Filtering by:", { category, priceRange });
    // Implement filter functionality
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <ShopNavbar />
      <ShopHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterSearch onSearch={handleSearch} onFilter={handleFilter} />
        <ProductListing />
      </div>
      <ContactShop />
      <ShopFAQs />
      <ShopNewsletter />
      <ShopFooter />
    </div>
  );
}