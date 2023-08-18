import './App.css'
import Aperture from './components/Aperture'
import Features from './components/Features'
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
    </>
  )
}

export default App