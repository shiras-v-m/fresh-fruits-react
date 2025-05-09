import React from 'react'
import BannerPng from "../../assets/banner-bg.jpg"
import { motion } from 'framer-motion'
import { FadeRight, FadeLeft } from '../../utility/animation'

const Banner3 = () => {
    const bgStyle={
        backgroundImage:`url(${BannerPng})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
    }
    return (
        <section className='bg-secondary/10 overflow-hidden'>
            <div style={bgStyle} className='container overflow-hidden grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl'>
            <div>
            </div>
                <div className='flex justify-center items-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1 variants={FadeRight(0.7)} initial="hidden" whileInView={"visible"} viewport={{ once: true }}
                            className='text-3xl lg:text-6xl font-bold uppercase'>Get Fresh Fruits Today</motion.h1>
                        <motion.p variants={FadeLeft(0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: true }}
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero tempora aperiam maxime corporis aliquam vitae quam officiis vel enim modi quos laborum, nisi minima, autem non error nobis cumque nam!</motion.p>
                        <motion.div variants={FadeRight(1.5)} initial="hidden" animate="visible"
                            className='flex justify-center md:justify-start'>
                            <button className='btn-primary'>
                                Order Now</button>
                        </motion.div>
                    </div>
                </div>
             
            </div>
        </section>
    )
}

export default Banner3