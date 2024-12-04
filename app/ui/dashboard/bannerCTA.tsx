import React from 'react'
import { Button } from '../button'
import { motion } from 'framer-motion'
import Image from 'next/image';
export default function BannerCTA() {
    return (
        <>
                       
            <div className='grid  px-4 md:px-12 lg:px-24 md:py-4 content-center  '>
                
            <div className="absolute left-0 z-[-3] overflow-hidden h-[670px] w-[850px] hidden md:block">
                <Image
                    src="/hero2.png"
                    width={700}
                    height={500}
                    className="object-cover object-left transform translate-x-[-200px] translate-y-[220px]  opacity-50 "
                    alt="Hero section background image"
                />
            </div>
 
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6 px-6 gap-y-6 md:px-12 md:py-12 lg:px-16 lg:py-24 items-center justify-between lg:gap-2 bg-gradient-to-r from-[#4f6124c8] from-0% to-[#37535E] to-5% rounded-[32px] overflow-hidden w-full md:w-3/2 lg:w-[1000px] mx-auto"
>

  <div className="hidden absolute -left-[-8] top-1/2 transform -translate-y-1/2 h-[320px] w-[270px] bg-gradient-to-r  from-[#CEFD6399] to-[#000000] rounded-[50%] z-[2] opacity-60 lg:block "></div>
  <div className="hidden absolute -left-[-100] top-1/2 transform -translate-y-1/2 h-[320px] w-[270px] bg-gradient-to-r  from-[#78953699] to-[#000000] rounded-[50%]  z-[1] opacity-60 lg:block"></div>

  

               
                    
                    <div className='grid grid-cols-1 content-center justify-items-start'>
                        <h1 className='text-[#FFF] font-bold text-3xl md:text-3xl lg:text-4xl leading-snug md:leading-relaxed lg:leading-relaxed z-[3]'>Elevate your <br /> brand Today!</h1>
                    </div>
                    <div className='grid grid-cols-1  justify-items-start content-center  gap-y-5  '>
                        <h1 className='text-xs md:text-xs lg:text-md font-normal text-[#ffffff] '>
                            Ready to transform your digital dresence? Let's <br/> create magic together! book our services now!
                        </h1>
                        <Button className='bg-[#ffffff] px-12  text-[#000000]'>Book Call</Button>
                    </div>
                </motion.div>

                
            </div >
        </>
    )
}
