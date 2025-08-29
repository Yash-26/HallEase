import { Calendar, Search, Star } from 'lucide-react'
import React from 'react'

function Features() {

    const features = [
        {
            icon: <Search />,
            lable: 'Smart Search',
            content: 'Find halls by location, capacity, and amenities with our intelligent search filters and real-time availability'
        },
        {
            icon: <Calendar />,
            lable: 'Real-time Availability',
            content: 'Check availability instantly with our live booking system. No double bookings, no surprises'
        },
        {
            icon: <Star />,
            lable: 'Verified Venues',
            content: 'All our wedding halls are verified, rated by real customers, and meet our quality standards'
        }
    ]
  return (
    <div className=' bg-white flex flex-col items-center justify-center py-16 gap-20'>
        <div className=' mt-14 flex flex-col gap-5 p-2'>
            <h2 className='font-bold text-4xl text-center'>Why Choose HallEase?</h2>
            <p className='text-gray-600 text-center   text-lg max-w-2xl '>We make wedding hall booking simple, transparent, and stress-free with cutting-edge technology</p>
        </div>
        <div className='md:flex'>
            {
                features.map((feature,index) => (
                    <div className='space-y-10 my-5 md:mx-5 md:my-0 lg:mx-10 p-5 hover:shadow-lg transition-shadow rounded-2xl' key={index}>
                        <div className='flex justify-center'>
                            <div className='bg-purple-100 text-purple-600 rounded-full p-5'>{feature.icon}</div>
                        </div>
                        <div className='space-y-5'>
                            <h3 className='text-center font-bold text-xl'>{feature.lable}</h3>
                            <p className='text-center text-lg text-gray-700 leading-relaxed'>{feature.content}</p>
                        </div>

                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Features