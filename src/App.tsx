import './App.css'

import { BookingProvider } from './store/BookingDetailsContext'

import Footer from './components/Footer/Footer'
import ForYouBlock from './components/ForYouBlock/ForYouBlock'
import HeroSection from './components/HeroSection/HeroSection'
import HowToBook from './components/HowToBook/HowToBook'
import OurPartners from './components/OurPartners/OurPartners'
import Reviews from './components/Reviews/Reviews'
import FindYourInstructor from './pages/FindYourInstructor/FindYourInstructor'

function App() {

  return (
    <>
    <BookingProvider>
      <HeroSection/>
      <ForYouBlock/>
      <HowToBook/>
      <OurPartners/>
      <Reviews/>
      <Footer/>
      <FindYourInstructor/>
    </BookingProvider>
    </>
  )
}

export default App
