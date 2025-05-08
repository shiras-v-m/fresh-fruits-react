import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-100}} transition={{duration:0.3}}
                className='absolute left-0 top-20 h-screen z-20 w-full h-screen'>
                    <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl '>
                        <ul className='flex flex-col items-center gap-10'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Shop</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default ResponsiveMenu