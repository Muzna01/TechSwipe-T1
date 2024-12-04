import React from 'react'
import Image from 'next/image'
import { Button } from '../button'
import { motion } from 'framer-motion'

export default function Journey() {
    return (
        <>
            <div className='grid px-4 md:px-12 lg:px-24 md:py-4 mt-24 md:mt-20 content-start md:content-center '>
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='grid grid-cols-1 md:grid-cols-2 py-6  md:py-12 lg:py-24 px-6 md:px-12 lg:px-16  justify-items-stretch content-center  bg-[#232038] rounded-[32px]  '
                    style={{ backgroundImage: `url('/Mask group.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className='grid grid-cols-1 content-center '>
                        <h1 className='text-[#FFFFFF] font-bold text-3xl md:text-2xl lg:text-4xl leading-snug'>Start Your Journey <br /> With Us Now</h1>
                        <Button className='bg-[#3461ff] px-12  text-[#ffffff] mt-20'>Start Now</Button>
                    </div>
                    <div className='grid grid-cols-1  justify-items-center content-center'>
                        <Image
                            src={'/Ellipse.png'}
                            width={352}
                            height={352}
                            alt='IT Image'
                            className='hidden md:block md:w-48 md:h-48  lg:w-56 lg:h-56 '
                        />

                    </div>
                </motion.div>
            </div>
        </>
    )
}
