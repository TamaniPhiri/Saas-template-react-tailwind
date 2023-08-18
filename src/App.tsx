import './App.css'
import Aperture from './components/Aperture'
import Cta from './components/Cta'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import PricingTable from './components/PricingTable'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Aperture/>
      <Pricing/>
      <PricingTable/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App