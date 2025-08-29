import { ArrowRight, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className=' bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-20  lg:py-40 flex flex-col items-center gap-10 transition-all'>
        <div className='text-center space-y-10'>
            <h1 className=' font-extrabold text-4xl md:text-6xl leading-tight px-6 lg:px-8'>Find Your Perfect
                <span className='block text-purple-600 mt-5'>Wedding Hall</span>
            </h1>
            <p className='max-w-4xl text-xl text-gray-600 md:text-2xl leading-relaxed mx-auto '>Discover and book stunning wedding venues for your special day.
                Browse through our curated collection of premium halls with transparent pricing and instant availability.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
            <div className='flex items-center bg-purple-600 hover:bg-purple-700 rounded-md px-8 py-4 text-white'>
                <Link to='/halls' >Start Booking</Link>
                <ArrowRight  className='h-4 w-4 ml-2'/>
            </div>
            <div className='flex items-center bg-white rounded-md px-8 py-4 border-2 border-purple-600 text-purple-600'>
                <Link to='/halls' >Browse Hallls</Link>
                <Search className='h-4 w-4 ml-2 '/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Hero