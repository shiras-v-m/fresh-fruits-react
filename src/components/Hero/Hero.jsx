import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroPng from '../../assets/fruit-plate.png'
import LeafPng from '../../assets/leaf.png'
import { motion } from 'framer-motion'
import {FadeRight} from '../../utility/animation.jsx'

const Hero = () => {
    return (
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative overflow-hidden'>
                <div className='flex flex-col justify-center  py-14 md:py-0 relative z-10'>
                    <div className='text-center md:text-left space-y-6 lg-max-w-[400px]'>
                        <motion.h1 variants={FadeRight(0.6)} initial="hidden" animate="visible" 
                         className='text-5xl lg:text-6xl font-bold learning-relaxed xl:leading-loose font-averia'>Healthy
                            <br />
                            Fresh
                            <span className='text-secondary'>  Fruits</span>
                        </motion.h1>
                        <motion.p variants={FadeRight(0.9)} initial="hidden" animate="visible" 
                         className='text-2xl tracking-wide'>Order Now For Healthy Fresh Life</motion.p>
                        <motion.p variants={FadeRight(1.2)} initial="hidden" animate="visible" 
                         className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Eat daily for good health and mind Order now and get 20% off on your first order</motion.p>
                        <motion.div variants={FadeRight(1.5)} initial="hidden" animate="visible" 
                         className='flex justify-center md:justify-start'>
                            <button className='btn-primary flex items-center gap-2'>
                                <span><IoBagHandleOutline /></span>
                                Order Now</button>
                        </motion.div>

                    </div>
                </div>
                <div  
                 className='flex justify-center items-center'>
                    <motion.img initial={{opacity:0,x:200,rotate:75}} animate={{opacity:1,x:0,rotate:0}} transition={{duration:1,delay:0.2}} src={HeroPng} alt="Hero Image" className='w-[350px] md:w-[550px] drop-shadow'/>
                </div>
                <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]'>
                    <motion.img initial={{opacity:0,y:-200,rotate:75}} animate={{opacity:1,y:0,rotate:0}} transition={{duration:1,delay:0.2}} 
                     src={LeafPng} alt="Leaf Image" className='w-full md:max-w-[300px]' />
                </div>
            </div>
        </section>
    )
}

export default Hero