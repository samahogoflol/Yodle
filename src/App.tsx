import './App.css'

import { BookingProvider } from './store/BookingDetailsContext'

import Footer from './components/Footer/Footer'
import ForYouBlock from './components/ForYouBlock/ForYouBlock'
import HeroSection from './components/HeroSection/HeroSection'
import HowToBook from './components/HowToBook/HowToBook'
import OurPartners from './components/OurPartners/OurPartners'
import Reviews from './components/Reviews/Reviews'
// import FindYourInstructor from './pages/FindYourInstructor/FindYourInstructor'
// import SecureCheckout from './pages/SecureCheckout/SecureCheckout'
import BookingConfirmed from './pages/BookingConfirmed/BookingConfirmed'

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
      <BookingConfirmed/>
      {/* <SecureCheckout/> */}
      {/* <FindYourInstructor/> */}
    </BookingProvider>
    </>
  )
}

export default App
