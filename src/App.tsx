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
import Cta from "./components/Cta";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <>
      <PreLoader/>
      <Navbar />
      <Hero />
      <Brands/>
      <FeaturesTop />
      <FeatureDetails />
      <Testimonial />
      <Comparison />
      <SoftwareFeature />
      <CoolFeatures/>
      <Cta/>
      <Footer />
    </>
  );
}

export default App;
