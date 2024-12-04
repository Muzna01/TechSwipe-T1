import React from 'react'
import { ArrowRightIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '../button';
import { motion } from 'framer-motion';

const about = [
    { id: '1', question: 'How do i sign up for the project?', },
    { id: '2', question: 'What thing that i should prepare before starting?', },
    { id: '3', question: 'Does my company need help for marketing advices?', },
]

export default function Pricing() {
    return (
        <>
            <div className='grid px-4 md:px-12 lg:px-24 md:py-4 mt-24 md:mt-20 content-start md:content-center '>
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:gap-28 gap-x-6  relative overflow-hidden '>

                    <div className='grid grid-cols-1  md:gap-x-10 border-t-2'>
                        {about.map((question) => {
                            return (
                                <div
                                    key={question.id}
                                    className=" flex flex-row items-center justify-between border-b-2 py-2 md:py-4 lg:py-8 "
                                >
                                    <p className="text-xs md:text-base lg:text-lg font-medium lg:leading-9 w-[85%] ">{question.question}</p>
                                    <PlusCircleIcon className='w-5 lg:w-6 bg-[#37535E] text-[#ffffff] rounded-full' />
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-xl lg:text-3xl font-medium  '>How we can help you?</h1>
                        <h1 className='text-sm lg:text-lg  font-medium text-[#00000099] pt-2 pb-5 lg:pt-5 lg:pb-10 '>Follow our newsletter. We will regulary update our latest project and availability.</h1>
                        <div className="flex flex-col md:flex-row items-start  justify-start bg-white py-4 lg:py-6">
                            <div className="relative">
                                <input
                                    className="peer block rounded-full border border-gray-200 py-[9px] pl-4 pr-4 md:pl-5 md:pr-5 text-sm outline-2 placeholder:text-gray-500"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    required
                                />
                            </div>
                            <Button className='md:mx-2 px-4 text-sm my-4 md:my-0 bg-[#37535E] text-[#ffffff]'>Lets Talk</Button>
                        </div>
                        <div className="flex felx-row items-start  justify-start bg-white ">
                            <button className='flex flex-row items-center gap-2 text-[#37535E] underline'>More FAQ <ArrowRightIcon className='w-5' /></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
