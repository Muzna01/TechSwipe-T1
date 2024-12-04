import React from 'react';
import Image from 'next/image';
import { Button } from '../button';
import { motion } from 'framer-motion';

const ourWork = [
    { id: '1', image: '/ourWork1.jpeg', label: 'Access Control' },
    { id: '2', image: '/ourWork2.jpeg', label: 'Access Control' },
    { id: '3', image: '/ourWork3.jpeg', label: 'Access Control' },
];

export default function OurWork() {
    return (
        <div className="relative grid px-4 md:px-12 lg:px-24 md:py-4 mt-24 md:mt-20 lg:mt-0 content-start md:content-center">
            {/* Positioned Image */}
            <div className="absolute bottom-0 right-0 z-[-1] overflow-hidden h-[670px] w-[900px] hidden md:block">
                <Image
                    src="/hero2.png"
                    width={700}
                    height={500}
                    className="object-cover object-right transform translate-x-[450px] translate-y-[250px] opacity-50"
                    alt="Hero section background image"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:gap-y-1 lg:my-20"
            >
                <div className="flex flex-col lg:py-0 items-center justify-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium">Our Work</h1>
                    <h1 className="text-sm md:text-md lg:text-lg font-medium text-[#00000099] pt-1 pb-3 lg:pt-2 lg:pb-7">
                        A glimpse of our portfolio
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-5">
                    {ourWork.map((work) => (
                        <div key={work.id} className="justify-items-center items-center">
                            <Image
                                key={work.id}
                                width={450}
                                height={300}
                                alt="IT Image"
                                src={work.image}
                                className="md:w-72 md:h-44 w-16 h-16 rounded-xl lg:w-100 lg:h-60 md:rounded-[40px]"
                            />
                            <h1 className="text-center text-xs md:text-md font-medium pt-2">{work.label}</h1>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center py-3">
                    <Button className="bg-[#3461FF] md:mx-4 px-4 text-sm my-4 md:my-0 text-[#ffffff]">See More</Button>
                </div>
            </motion.div>
        </div>
    );
}
