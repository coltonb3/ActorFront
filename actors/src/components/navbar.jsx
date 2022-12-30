import React, {useState} from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {RiCloseCircleLine} from 'react-icons/ri'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }   
    return (
        <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#df3000]'>Home</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Search</li>
                <li className='p-4'>Movies</li>
                <li className='p-4'>Random</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden z-10 opacity-70' >
                {!nav ?   <RiCloseCircleLine size={20}/> :   <HiOutlineMenuAlt1 size={20}/> }
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ' }>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Home</h1>
                <ul className='w-full text-3xl font bold text-[#00df9] m-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Random</li>
                    <li className='p-4 border-b border-gray-600'>Search </li>
                    <li className='p-4'>Add</li>
                </ul>
            </div>
        </div>

        </div>

)       
    }

export default Navbar

