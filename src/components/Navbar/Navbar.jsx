import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md'
import ResponsiveMenu from './ResponsiveMenu'
import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
const Navbar = () => {
    const [open,setOpen]=useState(false)
    const navbarMenu = [{
        id: 1,
        title: "Home",
        link: '/home'
    },
    {
        id: 2,
        title: "about",
        link: ''
    },
    {
        id: 3,
        title: "product",
        link: '#'
    },
    {
        id: 4,
        title: "shop",
        link: '#'
    },
    {
        id: 5,
        title: "contact",
        link: '/contact'
    },

    ]
    return (
       <>
            <motion.nav initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:0.5}}
            >
                <div className='container flex items-center  justify-between py-4 md:pt-4'>
                    <div className='text-2xl flex items-center gap-2 font-bold'>
                        <p className='text-primary'>Fruit</p>
                        <p className="text-secondary">Store</p>
                        <FaLeaf className='text-green-500' />
                    </div>
    
    
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            {
                                navbarMenu.map((menu) => (
                                    <li key={menu.id}>
                                        <a href={menu.link} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{menu.title}</a>
                                    </li>
                                ))
                            }
                            <button className='text-2xl hover:text-white hover:bg-primary rounded-full p-2 duration-200'>
                                <MdOutlineShoppingCart />
                            </button>
                        </ul>
                    </div>
                <div className='md:hidden' onClick={()=>setOpen(!open)}>
                    {!open ? <MdMenu className='text-4xl'/> : <IoClose className='text-4xl'/>}
                </div>
                </div>
            
                
            </motion.nav>
            <ResponsiveMenu open={open}/>
       </>
        //  Mobile humburger Menu Section
    )
}

export default Navbar