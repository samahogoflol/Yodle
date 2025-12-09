import './App.css'

import { BookingProvider } from './store/BookingDetailsContext'
import { Routes, Route, useLocation } from 'react-router-dom'

import ScrollToHashElement from './components/Features/scrollToHashElement'
import { ScrollToTop } from './components/Features/scrollToTop'

import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import PublicOffer from './pages/PublicOffer/PublicOffer'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import BookingConfirmed from './pages/BookingConfirmed/BookingConfirmed'
import FindYourInstructor from './pages/FindYourInstructor/FindYourInstructor'
import SecureCheckout from './pages/SecureCheckout/SecureCheckout'


function App() {

  const location = useLocation()

  return (
    <>
    <div className='App'>
        <BookingProvider>
          <ScrollToHashElement/>
          <ScrollToTop/>
          <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='publicOffer' element={<PublicOffer/>}/>
           <Route path='privacyPolicy' element={<PrivacyPolicy/>}/>
           <Route path='bookingConfirmed' element={<BookingConfirmed/>}/>
           <Route path='secureCheckout' element={<SecureCheckout/>}/>
           <Route path='findYourInstructor' element={<FindYourInstructor/>}/>
          </Routes>
          {location.pathname !== "/bookingConfirmed" && (
            <>
              <Footer/>
            </>
          )}
        </BookingProvider>
    </div>
    </>
  )
}

export default App
