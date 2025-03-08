import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import QuoteForm from "./components/QuoteForm";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Shop from "./components/shop/Shop";
import Cart from "./components/shop/Cart";
import SolarTools from "./components/tools/SolarTools";
import PVCalculator from "./components/tools/PVCalculator";

function MainContent() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <QuoteForm />
      <Products />
      <WhyChoose />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/solar-tools" element={<SolarTools />} />
          <Route path="/solar-tools/pv-calculator" element={<PVCalculator />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;