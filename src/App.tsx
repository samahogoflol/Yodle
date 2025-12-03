import './App.css'
import Footer from './components/Footer/Footer'
import ForYouBlock from './components/ForYouBlock/ForYouBlock'
import HeroSection from './components/HeroSection/HeroSection'
import HowToBook from './components/HowToBook/HowToBook'
import OurPartners from './components/OurPartners/OurPartners'
import Reviews from './components/Reviews/Reviews'

function App() {

  return (
    <>
      <HeroSection/>
      <ForYouBlock/>
      <HowToBook/>
      <OurPartners/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
