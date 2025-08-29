import React, { useState } from 'react'
import {Heart, HeartIcon, Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [menuOpen,setMenuOpen] = useState(false);

    const navlinks = [
        {name:'Home',path:'/'},
        {name:'Browse Halls', path:'/halls'}
    ]
  return (
    <div className='bg-white flex justify-between  p-5 mr-5'>
        <div className='flex items-center justify-center'>
            <Heart className='text-purple-600 mr-2'/>
            <Link to='/' className='text-purple-600 font-extrabold text-3xl'>HallEase</Link>
        </div>

        {/* Hamburger Icon */}
        <div className='m-1 pr-0 md:hidden transition-all'>
          <button onClick={()=> setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {
          menuOpen &&(
            <ul className='absolute -right-1 top-16 text-center px-2 py-2 bg-white rounded-md md:hidden z-40 transition-all '>
              {
                navlinks.map((nav,index)=>(
                  <li key={index}>
                    <Link to={nav.path} >{nav.name}</Link>
                  </li>
                ))
              }
            </ul>
          )
        }

        <div className='md:flex items-center hidden'>
            <nav className='flex gap-5'>
                <Link to='/' className='text-gray-700 hover:text-purple-600 text-sm transition-colors'>Home</Link>
                <div>
                    <Link to='/halls' className='bg-purple-600 px-4 py-2 rounded-md text-white hover:bg-purple-700 text-sm transition-all' >Browse Halls</Link>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar