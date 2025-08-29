import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter';
import HallCard from '../components/HallCard';
import sample from '../assets/hall.jpeg'
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHall } from '../context/HallContext';

function HallListings() {
    
    const[searchTerm, setSearchTerm] = useState('');
    const[sortBy, setSortBy] = useState('Ascending');
    const[capacityFilter, setCapacityFilter] = useState('');
    const[priceFilter, setPriceFilter] = useState('');
    const [halls, setHalls] = useState([]);
  
    useEffect(()=>{
      const fetchHalls = async() =>{
        try{
          const res = await axios.get('http://localhost:5000/api/halls');
          setHalls(res.data);
        }catch(err){
          console.log("Error fetching halls", err);
        }
      }

      fetchHalls()
      
    },[])

    console.log(halls);

    const filteredHalls = halls
        .filter(hall=>
            hall?.name.toLowerCase().includes(searchTerm.toLowerCase())||
            hall?.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(hall=>
            capacityFilter==''||
            (capacityFilter=='<100' &&hall?.capacity<=100) ||
            (capacityFilter=='100-500' &&hall?.capacity>=100 && hall?.capacity<=500) ||
            (capacityFilter=='>500' && hall?.capacity>=500)
        )
        .filter(hall=>
            // console.log(hall.price)
            priceFilter==''||
            (priceFilter=='<1000' && hall?.price<1000) ||
            (priceFilter=='1000-10000' && hall?.price>=1000 && hall?.price<=10000) ||
            (priceFilter=='>10000' &&  hall?.price>10000)
        )
        .sort((a,b)=>{
        
            if(sortBy=='Ascending') return a.name.localeCompare(b.name);
            if (sortBy === 'Descending') return b.name.localeCompare(a.name);
            if(sortBy=='Low-High') return a.price-b.price;
            if(sortBy=='High-Low') return b.price-a.price;
        })
        
  return (
    <div className='transition-all overflow-hidden' >
        <Navbar />
        <div className='py-18 '>
            <div className='flex flex-col justify-start gap-14 bg-white px-10 md:px-18'>
                <Link to='/' className='text-purple-600 flex items-center font-semibold'>
                <ArrowLeft className='h-4 w-4 mr-2'/> {'Back to Home'}
                </Link>
                <div className='space-y-2'>
                    <h2 className='text-xl font-bold'>Wedding Halls</h2>
                    <p className='text-gray-700 text-sm'>Discover the perfect venue for your special day</p>
                </div>
            </div>
            <Filter 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                capacityFilter={capacityFilter}
                setCapacityFilter={setCapacityFilter}
                priceFilter={priceFilter}
                setPriceFilter={setPriceFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}

            />
            <div className='bg-[#f6f6f6] p-10 min-w-screen' >
                <p>Showing {filteredHalls.length} of {halls.length} wedding halls</p>

                <div className='flex flex-wrap justify-center'>
                    {
                    
                    filteredHalls.map((hall,index)=>(
                        <HallCard key={index} hall={hall}/>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HallListings