import './App.css'

import { BookingProvider } from './store/BookingDetailsContext'
import { Routes, Route} from 'react-router-dom'

import ScrollToHashElement from './components/Features/scrollToHashElement'
import { ScrollToTop } from './components/Features/scrollToTop'

import HomePage from './pages/HomePage/HomePage'
import PublicOffer from './pages/PublicOffer/PublicOffer'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import BookingConfirmed from './pages/BookingConfirmed/BookingConfirmed'
import FindYourInstructor from './pages/FindYourInstructor/FindYourInstructor'
import SecureCheckout from './pages/SecureCheckout/SecureCheckout'
import Page404 from './pages/Page404/Page404'
import Layout from './components/Layout/Layout'


function App() {

  return (
    <>
    <div className='App'>
        <BookingProvider>
          <ScrollToHashElement/>
          <ScrollToTop/>
          <Routes>
           <Route element={<Layout/>}> 
            <Route path='/' element={<HomePage/>}/>
            <Route path='publicOffer' element={<PublicOffer/>}/>
            <Route path='privacyPolicy' element={<PrivacyPolicy/>}/>
            <Route path='secureCheckout' element={<SecureCheckout/>}/>
            <Route path='findYourInstructor' element={<FindYourInstructor/>}/>
           </Route>
           <Route path='*' element={<Page404/>}/>
           <Route path='bookingConfirmed' element={<BookingConfirmed/>}/>
          </Routes>
        </BookingProvider>
    </div>
    </>
  )
}

export default App
