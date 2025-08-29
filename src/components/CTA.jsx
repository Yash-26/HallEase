import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <div className='bg-gradient-to-r from-purple-600 to-pink-600 flex flex-col items-center gap-10 py-16 px-2 leading-relaxed'>
        <div className='text-center space-y-2'>
            <h2 className='font-bold text-white text-4xl'>Ready to Find Your Dream Venue?</h2>
            <p className='text-white text-lg'>Start your journey to the perfect wedding day. Browse our collection of stunning halls and book with confidence.</p>
        </div>
        <div>
            <button className='bg-white text-purple-600 px-4 py-2 rounded-md text-lg font-semibold flex items-center justify-center'>
                <Link to='/halls' >Browse Wedding Halls</Link>
                <ArrowRight className='w-4 h-4 ml-2'/>
            </button>
        </div>
    </div>
  )
}

export default CTA