import "./App.css";
import FeatureDetails from "./components/FeatureDetails";
import Brands from "./components/Brands";
import SoftwareFeature from "./components/SoftwareFeature";
import FeaturesTop from "./components/FeaturesTop";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Comparison from "./components/Comparison";
import CoolFeatures from "./components/CoolFeatures";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands/>
      <FeaturesTop />
      <FeatureDetails />
      <Testimonial />
      <Comparison />
      <SoftwareFeature />
      <CoolFeatures/>
      <Footer />
    </>
  );
}

export default App;
