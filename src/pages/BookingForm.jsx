import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { useBooking } from '../context/BookingContext';
import { useHall } from '../context/HallContext';
import { ArrowLeft } from 'lucide-react';

function BookingForm() {

    const{selectedHall} = useHall();
    const {bookingDetails, setBookingDetails} = useBooking();
    const navigate = useNavigate();

    console.log(selectedHall);
    console.log(bookingDetails);

    const [formData,setFormData] = useState({
        name: '',
        email: '',
        mob: '',
        eventType: ''
    }
    )
    const handleChange = (e) => {
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBooking = {
            ...bookingDetails,
            user:{
                name: formData.name,
                email: formData.email,
                mobile: formData.mob,
                eventType: formData.eventType
            }
        }
        setBookingDetails(newBooking);
        navigate('/payment') 
    }
    
  return (
    <div className=''>
        <Navbar />
        <div className='p-5 ml-5'>
            <Link to='/halls' className='text-purple-600 flex items-center font-semibold'>
                <ArrowLeft className='h-4 w-4 mr-2'/> {'Back'}
            </Link>
        </div>
        <div className='bg-[#f6f6f6] min-h-screen flex flex-col justify-center items-center'>
            <form className='space-y-14 bg-white py-10 px-10 justify-center items-center flex flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <label className='text-purple-500 font-bold'>Full Name</label>
                    <input name='name' type='text' 
                    placeholder='Enter Your Name'
                    onChange={handleChange}
                    required
                    className='bg-white px-2 py-1 rounded-md outline-none md:w-sm border border-purple-300'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-purple-500 font-bold'>Email</label>
                    <input name='email' type='email'
                    placeholder='Enter Your Email' 
                    onChange={handleChange}
                    required
                    className='bg-white px-2 py-1 rounded-md outline-none md:w-sm border border-purple-300'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label  className='text-purple-500 font-bold'>Mobile</label>
                    <input type='phone' name='mob'
                    placeholder='Enter Your MobileNo'
                    onChange={handleChange}
                    required
                    className='bg-white px-2 py-1 rounded-md outline-none md:w-sm border border-purple-300'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='text-purple-500 font-bold'>Event Type</label>
                    <select name='eventType' onChange={handleChange} required className='bg-white px-2 py-1 rounded-md outline-none md:w-sm border border-purple-300'>
                        <option value=''>Select Event Type</option>
                        <option>Wedding</option>
                        <option>Reception</option>    
                    </select>
                </div>
                <button type='submit'  className='bg-purple-600 px-4 py-2 rounded-md text-white hover:cursor-pointer transition-all'>Proceed to Pay</button>
            </form>
        </div>
    </div>
  )
}

export default BookingForm