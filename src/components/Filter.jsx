import { Search } from 'lucide-react'
import React from 'react'

function Filter({
    searchTerm, setSearchTerm,
    sortBy, setSortBy,
    capacityFilter, setCapacityFilter,
    priceFilter, setPriceFilter
}) {
  return (
    <div className='flex flex-col md:flex-row justify-between my-18 bg-white px-18 transition-all'>
        <div className='relative w-full max-w-md mr-8'>
            
            <input 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className='peer md:w-md ring-1 p-3  ring-purple-400 outline-none rounded-md transition-all'
            />
            {
                searchTerm==='' &&(
                <Search className='absolute top-1 left-2 h-10 w-10 px-3 py-3 peer-focus:hidden transition-all text-purple-600' /> 
            )}
        </div>
        <div className='lg:space-x-4 xl:space-x-18 lg:flex mt-5 lg:mt-0'>
            <select value={priceFilter} onChange={(e)=>setPriceFilter(e.target.value)} className='m-2 lg:mt-0 p-3 rounded-md font-semibold shadow-md focus:outline-none text-center transition-all'>
                <option value=''>Any Price</option>
                <option value='<1000'>{'<1000'}</option>
                <option value='1000-10000'>{'1000-10000'}</option>
                <option value='>10000'>{'>10000'}</option>
            </select>   
            <select value={capacityFilter} onChange={(e)=>setCapacityFilter(e.target.value)} className='m-2 lg:mt-0 p-3 rounded-md font-semibold shadow-md focus:outline-none text-center transition-all'>
                <option value=''>Any Capacity</option>
                <option value='<100'>{'<100'}</option>
                <option value='100-500'>{'100-500'}</option>
                <option value='>500'>{'>500'}</option>
            </select>
            
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className='m-2 lg:mt-0 p-3 rounded-md font-semibold shadow-md focus:outline-none text-center transition-all'>
                <option value='Ascending'>Ascending</option>
                <option value='Descending'>Descending</option>
                <option value='Low-High'>Price: Low-High</option>
                <option value='High-Low'>Price: High-Low</option>
                
            </select>
        </div>
        
    </div>
  )
}

export default Filter