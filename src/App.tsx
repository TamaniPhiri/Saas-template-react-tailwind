import "./App.css";
import FeatureDetails from "./components/FeatureDetails";
import Brands from "./components/Brands";
import Cta from "./components/Cta";
import FeaturesTop from "./components/FeaturesTop";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import PricingTable from "./components/PricingTable";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands/>
      <FeaturesTop />
      <FeatureDetails />
      <Testimonial />
      <PricingTable />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
