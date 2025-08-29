import React from 'react'

function Working() {

    const steps = [
        {
            icon: '1',
            lable: 'Search & Browse',
            content: 'Browse through our curated collection of wedding halls and use filters to find your perfect match'
        },
        {
            icon: 2,
            lable: 'Select Date',
            content: 'Check real-time availability and select your preferred date from our interactive calendar'
        },
        {
            icon: 3,
            lable: 'Verified Venues',
            content: 'Complete your booking with secure payment and receive instant confirmation with booking reference'
        }
    ]
  return (
    <div className=' bg-gray-50 flex flex-col items-center justify-center pb-20 gap-20'>
        <div className=' mt-14 flex flex-col gap-5 p-2'>
            <h2 className='font-bold text-4xl text-center'>How It Works</h2>
            <p className='text-gray-600 text-center   text-lg max-w-2xl '>Book your dream wedding hall in just a few simple steps</p>
        </div>
        <div className='md:flex'>
            {
                steps.map((step,index) => (
                    <div className='space-y-10 my-5 md:mx-5 md:my-0 lg:mx-10 p-5 hover:shadow-lg transition-shadow rounded-2xl' key={index}>
                        <div className='flex justify-center'>
                            <div className='bg-purple-600 rounded-full px-4 py-2 '>{step.icon}</div>
                        </div>
                        <div className='space-y-5'>
                            <h3 className='text-center font-bold text-xl'>{step.lable}</h3>
                            <p className='text-center text-lg text-gray-700 leading-relaxed'>{step.content}</p>
                        </div>

                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Working