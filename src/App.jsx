
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import HallListings from './pages/HallListings'
import HallDetail from './pages/HallDetail'
import BookingForm from './pages/BookingForm'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import { BookingProvider } from './context/BookingContext'
import { HallProvider } from './context/HallContext'
import { Toaster } from 'react-hot-toast';



function App() {
 

  return (
    <div>
      <Toaster position='top-right' reverseOrder={false} />
      <BookingProvider>
        <HallProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/halls' element={<HallListings />} />
              <Route path='/halls/:id' element={<HallDetail />} />
              <Route path='/booking' element={<BookingForm />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/confirmation' element={<Confirmation />} />
            </Routes>
          </BrowserRouter>
        </HallProvider>
      </BookingProvider>
    </div>
  )
}

export default App
