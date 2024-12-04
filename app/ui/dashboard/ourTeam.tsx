import React from 'react'
import Image from 'next/image'
import { Button } from '../button'
import { motion } from 'framer-motion'

const ourTeam = [
    { id: '1', image: '/team1.jpeg' },
    { id: '2', image: '/team2.jpeg' },
    { id: '3', image: '/team3.jpeg' },
    { id: '4', image: '/team4.jpeg' },
    { id: '5', image: '/team5.jpeg' },
    { id: '6', image: '/team6.jpeg' },
]
export default function OurTeam() {
    return (
        <>
            <div className='grid px-4 md:px-12 lg:px-24 md:py-4 mt-24 md:mt-20 content-start md:content-center '>
                
        
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-28 gap-x-6  relative overflow-hidden w-full md:w-3/2 lg:w-[1000px] mx-auto '>
                    {/* Content */}
                    
                    <div className=' grid grid-cols-3  gap-y-5 inset-0  py-5 md:py-10 lg:py-20  relative  justify-items-center content-center md: w-[70%] lg:w-[90%] '>
                        {/* Background overlay */}
                        <div
                            className=" absolute inset-0  bg-center  opacity-20 "
                            style={{ backgroundImage: `url('/ourTeamBG.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                        />
                        {/* Additional content here if needed */}

                        {ourTeam.map((team, index) => {
                            return (
                                // <div
                                //   key={team.id}
                                //   className="flex flex-row"
                                // >
                                <Image
                                    key={team.id}
                                    width={190}
                                    height={190}
                                    alt='IT Image'
                                    src={team.image}
                                    // Alternate between square and rounded shape
                                    className={`w-14 h-14 md:w-20 md:h-20  lg:w-24 lg:h-24 z-10 ${index % 4 < 2 ? 'rounded-xl md:rounded-2xl lg:rounded-3xl' : 'rounded-full'}`}
                                />
                                // </div>
                            );
                        })}
                    </div>

                    <div className='grid grid-cols-1 md:py-10 lg:py-20 relative z-10 content-center'>
                        <h1 className='text-xl md:text-4xl lg:text-4xl font-medium '>Meet Our Team</h1>
                        <h1 className='text-xs md:text-md lg:text-lg font-medium text-[#00000099] pt-2 pb-5 md:pt-5 md:pb-10'>
                            Discover the brilliance behind Embrace. Our team blends innovation and artistry to craft digital wonders that captivate.
                        </h1>
                        <div className="flex flex-row items-start justify-start bg-white">
                            <Button className='px-6 md:px-12 bg-[#37535E] text-[#ffffff] text-xs md:text-md lg:text-lg'>Learn More</Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
