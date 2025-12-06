import './App.css'

import { BookingProvider } from './store/BookingDetailsContext'

import Footer from './components/Footer/Footer'
import ForYouBlock from './components/ForYouBlock/ForYouBlock'
import HeroSection from './components/HeroSection/HeroSection'
import HowToBook from './components/HowToBook/HowToBook'
import OurPartners from './components/OurPartners/OurPartners'
import ReviewsSwiper from './components/Reviews/ReviewsSwiper'
// import FindYourInstructor from './pages/FindYourInstructor/FindYourInstructor'
// import SecureCheckout from './pages/SecureCheckout/SecureCheckout'
// import BookingConfirmed from './pages/BookingConfirmed/BookingConfirmed'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {

  return (
    <>
    <div>
    <BookingProvider>
      <HeroSection/>
      <ForYouBlock/>
      <HowToBook/>
      <OurPartners/>
      <ReviewsSwiper/>
      <Footer/>
      {/* <BookingConfirmed/> */}
      {/* <SecureCheckout/> */}
      {/* <FindYourInstructor/> */}
    </BookingProvider>
    </div>
    </>
  )
}

export default App
