import { ArrowLeft, Check, MapPin, Star, Users2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Calendar from '../components/Calendar';
import { format } from 'date-fns';
import dayjs from 'dayjs';
import Navbar from '../components/Navbar';
import { useBooking } from '../context/BookingContext';
import { useHall } from '../context/HallContext';
import { useEffect } from 'react';

function HallDetail() {

    const {selectedHall, setSelectedHall} = useHall();
    const {bookingDetails,setBookingDetails} = useBooking();

    const navigate = useNavigate();
    const location = useLocation();
    const {hall} = location.state || {}
    const {id} = useParams()
    
    const currentDate = dayjs();
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [selectDate, setSelectDate] = useState(currentDate);
    
    const total = hall.price + 200;
    console.log(selectedHall);

    const handleConfirm = () =>{
        setBookingDetails(prev=>({
            ...prev,
            hallId: id,
            hallName: hall.name,
            bookingDate: selectDate.toDate().toDateString()
        }));
        navigate('/booking');
    }

    useEffect(()=>{
        if(hall){
            setSelectedHall(hall);
        }
    },[]);

  return (
    <div className='bg-[#F6F6F6] min-h-screen pb-20'>
        <Navbar />
        <div className='p-5 ml-5 hover:scale-95 transition-all'>
            <Link to='/halls' className='text-purple-600 flex items-center font-semibold'>
                <ArrowLeft className='h-4 w-4 mr-2'/> {'Back'}
            </Link>
        </div>
        <div className='flex flex-col lg:flex-row justify-around items-start'>
            <div className='bg-white rounded-lg shadow-md p-5 m-5'> {/*Left*/}
                <div className=''>
                    <img src={hall.image} className='mx-auto w-40 md:w-60' alt='preview'/>
                </div>
                <div className='m-0 md:mx-5 md:my-5 space-y-2'>
                    <h3 className='font-bold'>{hall.name}</h3>
                    <div className='flex gap-5 items-center'>
                        <MapPin />
                        {hall.location}
                    </div>
                    <div className='flex gap-5 items-center'>
                        <Users2 />
                        Upto {hall.capacity}
                    </div>
                    <div className='flex gap-5 items-center'>
                        <Star className='fill-amber-400 text-transparent'/>
                        {hall.rating}
                    </div>
                    <div className='leading-relaxed md:w-lg text-justify'>
                        <p>{hall.description}</p>
                    </div>
                </div>
            </div>
            <div className='bg-white p-5 space-y-7 rounded-lg shadow-md m-5 top-40'> {/*RIght*/}
                <div className='space-y-2'>
                    <h2 className='font-bold'>${hall.price}</h2>
                    <p className='flex items-center'>
                        <Star className='w-4 h-4 mr-2 fill-amber-400 text-transparent'/> {hall.rating}
                    </p>
                </div>
                <div className='text-center space-y-5 transition-all'>
                    {
                        !isDateSelected ?
                        <button disabled className='bg-gray-300 px-4 py-2 rounded-md text-gray-600' >Select a Date</button> 
                        : <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:cursor-pointer' onClick={handleConfirm}>Confirm Booking</button>
                    }
                    <p>You won't be charged yet</p>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <span>Base price</span>
                        <span>${hall.price}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Service fee</span>
                        <span>$200</span>
                    </div>
                </div>
                <div className='font-bold flex justify-between'>
                    <h2>Total</h2>
                    <h2>${total}</h2>
                </div>
            </div>
        </div>
        <div className=' flex justify-around '>
            <div className='bg-white rounded-lg shadow-md m-5 mr-64 p-5 w-[600px]'>
                <h2 className='font-bold text-lg'>Amenities</h2>
                {
                hall.amenities.map((amenity,index)=>(
                    <span key={index} className='flex items-center '>
                        <Check className='w-3 h-3 mr-2'/> {amenity}
                    </span>
                ))
                }
            </div>
            <div></div>
        </div>
        <Calendar selectDate={selectDate} setSelectDate={setSelectDate} setIsDateSelected={setIsDateSelected}/>
    </div>
  )
}

export default HallDetail