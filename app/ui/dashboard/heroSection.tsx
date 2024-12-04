
import React from 'react'
import Image from 'next/image'
import { Button } from '../button'
import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <>
            <div className='grid px-4 md:px-12 lg:px-24  mt-24  md:mt-0 md:content-center'>
                <motion.div
                initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                     className ="flex  justify-between  md:py-12 w-full  lg:mr-auto py-6 lg:py-10 "
                   >
                    <div className='flex flex-col w-[100%] overflow-hidden '>
                        <h1 className='text-[40px] md:text-5xl lg:text-6xl font-bold '>Transforming <br /> Businesses </h1>
                        <h1 className='text-lg md:text-xl lg:text-2xl  font-medium text-[#00000099] pt-4 pb-6 lg:pt-7 lg:pb-11 '>with Tailored IT Solutions </h1>
                        <div className="flex flex-col md:flex-row items-start  justify-start bg-white">
                            <div className="relative ">
                                <input
                                    className="peer block rounded-full border border-gray-200 py-[9px] pl-4 pr-4 md:pl-10 md:pr-10 text-sm outline-2 placeholder:text-gray-500"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    required
                                />
                            </div>
                            <Button className='md:mx-4 px-4 text-sm my-4 md:my-0 bg-[#37535E] text-[#ffffff]'>Lets Talk</Button>
                        </div>
                    </div>
                    {/* Add Hero Images Here */}
                    <div className='flex absolute right-0'>
                        <Image
                            src="/hero1.png"
                            width={380}
                            height={393}
                            className="hidden md:block rotate-180 lg:w-96 lg:h-96  md:w-60 md:h-60"
                            alt="Hero section image"
                        />
                    </div>
                </motion.div>
            </div>
        </>
    )
}
