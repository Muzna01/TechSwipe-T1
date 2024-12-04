import React from 'react'
import { ArrowRightIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
const companyStatus = [
    { label: '245%', discp: 'More revenues for the brand' },
    { label: '130K+', discp: 'Audience Reached' },
    { label: '50+', discp: 'Brands trust us' },
    { label: '24+', discp: 'Worldwide Awards' },
    // {
    //   name: 'Invoices',
    //   href: '/dashboard/invoices',
    //   icon: DocumentDuplicateIcon,
    // },
    // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function CompanyStatus() {
    return (
        <>
            <div className='grid px-4 md:px-12 lg:px-24  md:py-6 mt-24 md:mt-0 md:content-center '>
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='grid grid-cols-1 md:grid-cols-2 md:py-10 justify-between md:gap-14 lg:gap-28'>
                    <div className='grid grid-cols-2 gap-0 gap-x-5 md:gap-x-10 gap-y-4 md:gap-y-7 lg:gap-x-20 lg:gap-y-7  content-center'>
                        {companyStatus.map((status) => {
                            return (
                                <a
                                    key={status.label}
                                    href={status.discp}
                                    className=" items-center justify-center "
                                >
                                    <p className="text-3xl md:4xl lg:text-6xl font-semibold ">{status.label}</p>
                                    <p className="text-xs md:text-sm lg:text-base font-medium text-[#00000099]">{status.discp}</p>
                                </a>
                            );
                        })}
                    </div>
                    <div className='grid grid-cols-1 md:content-center md:px-2 py-6 lg:py-0'>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl font-medium  '>Commitments</h1>
                        <h1 className='text-xs  md:text-sm lg:text-base  font-medium text-[#00000099] pt-2 pb-5 lg:pt-5 lg:pb-10 '>We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.</h1>
                        <div className="grid grid-cols-1 justify-items-start md:content-center bg-white">
                            <button className='flex flex-row items-center gap-1 text-[#3461FF]'>Learn more <ArrowRightIcon className='w-5' /></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
