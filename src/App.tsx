import './App.css'

import { BookingProvider } from './store/BookingDetailsContext'
import { Routes, Route } from 'react-router-dom'

import ScrollToHashElement from './components/Features/scrollToHashElement'

import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import PublicOffer from './pages/PublicOffer/PublicOffer'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import BookingConfirmed from './pages/BookingConfirmed/BookingConfirmed'
import FindYourInstructor from './pages/FindYourInstructor/FindYourInstructor'
import SecureCheckout from './pages/SecureCheckout/SecureCheckout'



function App() {

  return (
    <>
    <div className='App'>
        <BookingProvider>
          <ScrollToHashElement/>
          <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='publicOffer' element={<PublicOffer/>}/>
           <Route path='privacyPolicy' element={<PrivacyPolicy/>}/>
           <Route path='bookingConfirmed' element={<BookingConfirmed/>}/>
           <Route path='secureCheckout' element={<SecureCheckout/>}/>
           <Route path='findYourInstructor' element={<FindYourInstructor/>}/>
          </Routes>
        </BookingProvider>
      <Footer/>
    </div>
    </>
  )
}

export default App
