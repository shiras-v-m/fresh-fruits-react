import React from 'react'
import fruit1 from "../../assets/fruits/apple.png"
import fruit2 from "../../assets/fruits/orange.png"
import fruit3 from "../../assets/fruits/avocado.png"
import fruit4 from "../../assets/fruits/cherry.png"
import {motion} from 'framer-motion'
import { FadeLeft } from '../../utility/animation'
const Menus = () => {

    const menuData =[
        {
            id:1,
            title:"Fresh Red Apples",
            link:'/',
            price:"$2.99",
            img:fruit1,
            delay:0.3

        },
        {
            id:2,
            title:"Fresh Oranges",
            link:'/',
            price:"$3.99",
            img:fruit2,
            delay:0.6


        },
        {
            id:3,
            title:"Fresh Avocado",
            link:'/',
            price:"$5.99",
            img:fruit3,
            delay:0.9

        },
        {
            id:4,
            title:"Fresh Cherries",
            link:'/',
            price:"$2.99",
            img:fruit4,
            delay:1.2


        },
    ]
  return (
    <section>
        <div className="container pt-12 pb-20    ">  
            {/* Instead of react-scroll we can use motion-framer for scroll transition */}
            <motion.h1 initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1,delay:0.3}}
             className='text-2xl font-bold text-left pb-10 uppercase'>Our Menu</motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  '>
                {
                    menuData.map((item,index)=>(
                        <motion.div variants={FadeLeft(item.delay)} initial={"hidden"} whileInView={"visible"} whileHover={{scale:1.1}}
                         key={index} className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                            <img src={item.img} alt={"Fruit Image"} className='w-[60px] mb-4 scale-110 transform-translate-y-6'/>
                            <div>
                                <h1 className='text-lg font-semibold'>{item.title}</h1>
                                <p className='text-lg font-semibold text-secondary'>{item.price}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Menus