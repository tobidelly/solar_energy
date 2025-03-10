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

// Service Pages
import ElectricalPanel from "./components/services/ElectricalPanel";
import AutomaticTransfer from "./components/services/AutomaticTransfer";
import IndustrialWiring from "./components/services/IndustrialWiring";
import EnergyAudit from "./components/services/EnergyAudit";
import RenewableEnergy from "./components/services/RenewableEnergy";
import AssetVerification from "./components/services/AssetVerification";

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
          <Route path="/contact" element={<Contact />} />

          {/* Service Routes */}
          <Route path="/services/electrical-panel" element={<ElectricalPanel />} />
          <Route path="/services/automatic-transfer" element={<AutomaticTransfer />} />
          <Route path="/services/industrial-wiring" element={<IndustrialWiring />} />
          <Route path="/services/energy-audit" element={<EnergyAudit />} />
          <Route path="/services/renewable-energy" element={<RenewableEnergy />} />
          <Route path="/services/asset-verification" element={<AssetVerification />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;