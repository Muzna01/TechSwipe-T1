import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const social = [
    { id: '1', image: '/instagram.png', link: 'https://www.instagram.com/' },
    { id: '2', image: '/twitter.png', link: 'https://twitter.com/' },
    { id: '3', image: '/facebook.png', link: 'https://www.facebook.com/' },
]
const bottom = [
    { id: '1', label: 'Work With Us' },
    { id: '2', label: 'Private Coaching' },
    { id: '3', label: 'About Us' },
    { id: '4', label: 'Advertise With Us' },
    { id: '5', label: 'Our Work' },
    { id: '6', label: 'FAQs' },
    { id: '7', label: 'Support Us' },
    { id: '8', label: 'Our Commitment' },
    { id: '9', label: 'Report a Bug' },
    { id: '10', label: 'Business Advices' },
    { id: '11', label: 'Our Team' }
]
export default function Bottom() {
    return (
        <>
            {/* Bottom */}
            <div className='grid px-4 md:px-12 lg:px-24 md:py-4 mt-24 md:mt-20 content-start md:content-center '>
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:gap-28 gap-x-6  relative overflow-hidden '>

                    <div className='grid grid-cols-1 py-5 md:py-10 lg:py-20 relative z-10 content-center'>
                        <div className=" text-white ">
                            <Image
                                src="/logo.png"
                                width={115}
                                height={37}
                                className="block"
                                alt="Logo"
                            />
                        </div>
                        <div className='flex flex-row md:flex-row  justify-start  gap-12 py-4 md:py-8 lg:py-16  '>
                            {social.map((social) => {
                                return (
                                    <div key={social.id} className="">
                                        <Image key={social.id} width={24} height={24} alt='IT Imge' src={social.image} className='w-6 lg:h-6  rounded-[40px] ' />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex flex-row items-start justify-start">
                            <button className='bg-[#37535E] text-[#ffffff] rounded-full py-2 px-5 md:py-4 md:px-11' >Contact Us</button>
                            {/* <Button className='px-12 '>Contact Us</Button> */}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 content-center md:gap-x-14 lg:grid-cols-3 '>
                        {bottom.map((label) => {
                            return (
                                // <div
                                //   key={label.id}
                                //   className=" flex flex-row items-center justify-between  "
                                // >
                                <p key={label.id} className="text-xs font-medium md:leading-5 py-1 md:py-2 lg:py-7">{label.label}</p>
                                // </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </>
    )
}
