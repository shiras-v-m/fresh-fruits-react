import React from 'react'
import BannerPng from "../../assets/fruit-plate2.png"
import { motion } from 'framer-motion'
import { FadeRight, FadeUp } from '../../utility/animation'

const Banner2 = () => {
    return (
        <section >
            <div className='container overflow-y-hidden grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
                <div className='flex justify-center items-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1 variants={FadeRight(0.7)} initial="hidden" whileInView={"visible"} viewport={{ once: true }}
                            className='text-3xl lg:text-6xl font-bold uppercase'>ONLINE FRUIT STORE</motion.h1>
                        <motion.p variants={FadeUp(0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: true }}
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero tempora aperiam maxime corporis aliquam vitae quam officiis vel enim modi quos laborum, nisi minima, autem non error nobis cumque nam!</motion.p>
                        <motion.div variants={FadeRight(1.2)} initial="hidden" animate="visible"
                            className='flex justify-center md:justify-start'>
                            <button className='btn-primary'>
                                Download the App</button>
                        </motion.div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <motion.img initial={{ opacity: 0, x:200,rotate:75 }} whileInView={{ opacity: 1, x:0,rotate:0 }} transition={{ duration:1, delay: 0.2 }} viewport={{ once: true }}
                        src={BannerPng} alt="Banner image" className='w-[300px] md:max-w-[400px] h-full object-cover' />
                </div>
            </div>
        </section>
    )
}

export default Banner2