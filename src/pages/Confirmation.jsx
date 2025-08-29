import { CalendarHeartIcon, CheckCircle, Home, MapPin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useBooking } from '../context/BookingContext';
import { useHall } from '../context/HallContext';
import axios from 'axios'
import toast from 'react-hot-toast';

function Confirmation() {
  
  const {selectedHall} = useHall();
  const {bookingDetails} = useBooking();
  
  const total = selectedHall?.price + 200;
  const refId = 'Book-'+Math.floor(1000000+Math.random()*900000);

  console.log(bookingDetails);

  useEffect(() => {

    const confirmBooking = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/bookings', bookingDetails);
        toast.success(res.data.message);
      } catch (err) {  
        console.error(err);
        toast.error(err.response.data.message)
      }
    };

    if (bookingDetails) {
      confirmBooking();
    }
  }, [bookingDetails]);

  
    if(!selectedHall) return <div className='text-center font-semibold'>Loading</div>
  return (
    <div >
      
        <div className='font-bold flex flex-col items-center my-10'>
            <CheckCircle  className='w-8 h-8 mr-4 text-green-500'/> {'Booking Confirmed'}
        </div>
        <div className='flex items-center justify-center text-center my-5'>
            <p className='leading-relaxed max-w-md '>🎉 Congratulations! Your wedding hall booking has been 
                successfully confirmed. We're thrilled to be part of your special day!
            </p>
        </div>
        <div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 " >
                <h1 className='font-bold text-3xl text-white'>Booking Details</h1>
                <p>{refId}</p>  {/*Reference no generate*/}
            </div>
            <div className='p-5 m-5 flex justify-around bg-white'>
                <div className='space-y-2'>
                    <h2 className='font-bold text-2xl mb-10'>Venue Information</h2>
                    <h2 className='font-bold'>{selectedHall.name}</h2>
                    <p className='flex items-center text-gray-500'>
                        <MapPin className='w-4 h-4 mr-2'/> {selectedHall.location}
                    </p>
                </div>
                <div className='space-y-3'>
                    <h2 className='font-bold text-2xl mb-5'>Event Information</h2>
                    <p className='flex items-center font-semibold'>
                        <CalendarHeartIcon className='w-4 h-4 mr-2'/> {'Event Date'}
                    </p>
                    <h2 className='font-bold text-xl'>{bookingDetails?.bookingDate}</h2>
                    <h3 className='font-semibold'>Total Amount</h3>
                    <h3 className='text-green-500'>${total}</h3>
                </div>
            </div>
        </div>
        <div className='text-center my-20 flex justify-center max-w-[300px] items-center mx-auto'>
            <Link to='/'
            className="flex items-center justify-center px-6 py-4   bg-purple-600 text-white rounded-xl w-full hover:bg-purple-700 transition-all transform hover:scale-105 shadow-md"
            >
            <Home className="w-5 h-5 mr-2" />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
    </div>
  )
}

export default Confirmation