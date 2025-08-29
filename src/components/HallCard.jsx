import { MapPin, Star, Users2 } from 'lucide-react'
import { Link } from 'react-router-dom'

function HallCard({hall}) {

  return (
    <div className='shadow-lg m-4 w-[400px] max-w-[400px] min-w-[250px] lg:min-w-sm p-2 rounded-lg transition-all flex flex-col justify-center jul-27 '>
        <div>
            <div className='relative'>
                <p className='absolute z-10 top-3 right-2 md:right-10 px-2 md:px-8 py-1 bg-white text-purple-600 rounded-3xl text-xs font-semibold '>Rs.{hall.price}</p>
            </div>
            <img src={hall.image} alt='img' className='w-full h-64 object-cover rounded-t-md'/>
            
        </div>
        <div>
            <div className='mx-5 my-5 space-y-2'>
                <h3 className='font-bold'>{hall.name}</h3>
                <div className='flex gap-5'>
                    <MapPin />
                    {hall.location}
                </div>
                <div className='flex gap-5'>
                    <Users2 />
                    Upto {hall.capacity}
                </div>
                <div className='flex gap-5'>
                    <Star className='fill-amber-400 text-transparent'/>
                    {hall.rating}
                </div>
            </div>
            <div className=' space-x-5 flex justify-center'>
                {
                    hall.amenities.map((tag,index)=>(
                        <span key={index} className='md:px-2 md:py-1 text-center md:text-sm bg-purple-300 rounded-3xl text-xs p-1 '>{tag}</span>
                    ))
                }
            </div>
            <div className='max-w-md rounded-md px-4 py-2 m-5 bg-purple-600 text-center text-white hover:bg-purple-700 transition-colors'>
                <Link to={`/halls/${hall._id}`} state={{hall}} >View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default HallCard