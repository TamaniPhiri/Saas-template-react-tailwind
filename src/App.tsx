import "./App.css";
import Aperture from "./components/Aperture";
import Brands from "./components/Brands";
import Cta from "./components/Cta";
import FeaturesTop from "./components/FeaturesTop";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import PricingTable from "./components/PricingTable";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands/>
      <FeaturesTop />
      <Aperture />
      <Pricing />
      <PricingTable />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
