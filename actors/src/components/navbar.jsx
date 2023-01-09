import React, {useState} from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {RiCloseCircleLine} from 'react-icons/ri'

const Navbar = (props) => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }   
    const [addActor, setAddActor] = useState(false)

        const handleAddActor = () => {
            setAddActor(!addActor);
            console.log("test")
        }
        const [activeNav, setActiveNav] = useState('#')

    return (
        <div className='flex   fixed items-center h-20 max-w-[1240px] mx-auto px-4 text-white z-10  '>
            <a href="#" onClick={() => setActiveNav('#')}className={activeNav=== '#' ? 'active' : ''}>Home </a>
            <a href="#search" onClick={() => setActiveNav('#search')}className={activeNav=== 'search' ? 'active' : ''}>Search</a>
            <a href="#add" onClick={() => setActiveNav('#add')}className={activeNav=== 'add' ? 'active' : ''}>Add</a>
            <div onClick={handleNav} className='block md:hidden z-10 opacity-70' >
                {!nav ?   <RiCloseCircleLine size={20}/> :   <HiOutlineMenuAlt1 size={20}/> }
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ' }>
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

