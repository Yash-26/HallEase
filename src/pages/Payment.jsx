import React, { useEffect, useState } from 'react'
import { CalendarHeartIcon, MapPin, Users2 } from 'lucide-react'
import Navbar from '../components/Navbar';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { useHall } from '../context/HallContext';
import Timer from '../components/Timer';
import toast from 'react-hot-toast';

function Payment() {

    const {selectedHall} = useHall();
    const {bookingDetails} = useBooking();
    const navigate = useNavigate();

    console.log(bookingDetails);

    const total = selectedHall.price + 200;

    const handlePay = () => {
        navigate('/confirmation')
    }
    
    if (!selectedHall) {
        return <div className='text-center font-semibold'>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <Timer />
            <div className='flex flex-col lg:flex-row justify-around mt-5'>
                <div className='bg-white border border-purple-300 m-5 p-5 leading-relaxed  md:w-md space-y-10 rounded-lg hover:shadow-md transition-all'>
                    <h1 className='font-bold text-xl text-center'>Contact Info</h1>
                    <div className=''>
                        <h2 className='font-bold'>Name</h2>
                        <p>{bookingDetails.user?.name}</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Email</h2>
                        <p>{bookingDetails.user?.email}</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>MobileNo</h2>
                        <p>{bookingDetails.user?.mobile}</p>
                    </div>
                </div>
                <div className=' flex flex-col  bg-white p-5 space-y-7 border border-purple-300 rounded-lg hover:shadow-md m-5 transition-all'>
                    <h2 className='font-bold text-xl'>Booking Summary</h2>
                    <div>
                        <h3 className='font-semibold'>{selectedHall.name}</h3>
                        <div className='flex gap-5 items-center text-gray-500'>
                            <MapPin className='w-4 h-4'/>
                            {selectedHall.location}
                        </div>
                        <div className='flex gap-5 items-center text-gray-500'>
                            <Users2 className='w-4 h-4'/>
                            Upto {selectedHall.capacity}
                        </div>
                    </div>
                    <div>
                        <h3 className='flex font-semibold items-center gap-2'>
                            <CalendarHeartIcon /> {'Event Date'}
                        </h3>
                        <h2 className='font-bold text-xl'>{bookingDetails?.bookingDate}</h2>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <span>Hall Rental</span>
                            <span>Rs.{selectedHall.price}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Service fee</span>
                            <span>Rs.200</span>
                        </div>
                    </div>
                    <div className='font-bold flex justify-between'>
                        <h2>Total</h2>
                        <h2>Rs.{total}</h2>
                    </div>
                </div>
                
            </div>
            <div className='text-center my-20 flex justify-center'>
                <button onClick={handlePay}  className=' px-4 py-2 bg-purple-600 w-xs max-w-md text-white rounded-md hover:cursor-pointer transition-all '>Pay</button>
            </div>  
        </div>
    )
}

export default Payment
