'use client';
import React, { useState, useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface CompanyStructureProps {
    currentIndex: number;
    headings: string[][];
    headingDiscp: string[][];
}

const companyServices = [
    {
        id: '1',
        heading: 'IT Infrastructure',
        discp: 'End-to-end solutions for network management, cloud integration, and infrastructure optimization.'
    },
    {
        id: '2',
        heading: 'Digital Transformation Consulting',
        discp: 'Helping organizations transition seamlessly into the digital age, boosting efficiency and innovation.'
    },
    {
        id: '3',
        heading: 'Quality Assurance & Monitoring',
        discp: 'Reliable surveillance and monitoring to ensure your systems perform optimally, reducing risks and downtime.'
    }
];
const headings = [
    ['Network Optimization'],
    ['Cloud Integration'],
    ['Data Center Solutions'],
    ['System Scalability']
];

const headingDiscp = [
    ['Streamlining network performance for reliable connectivity.'],
    ['Seamless cloud adoption for enhanced flexibility.'],
    ['Efficient data center management and support.'],
    ['Scalable infrastructure to support business growth.']
];

const companyInfraStructure = [
    [
        {
            id: '1',
            image: '/gray.png',
            label: 'Network Optimization',
            discp: 'Streamlining network performance for reliable connectivity.'
        },
        {
            id: '2',
            image: '/yellow.png',
            label: 'Cloud Integration',
            discp: 'Seamless cloud adoption for enhanced flexibility.'
        },
        {
            id: '3',
            image: '/gray.png',
            label: 'Data Center Solutions',
            discp: 'Efficient data center management and support.'
        },
        {
            id: '4',
            image: '/yellow.png',
            label: 'System Scalability',
            discp: 'Scalable infrastructure to support business growth.'
        },
    ],
    [
        {
            id: '1',
            image: '/gray.png',
            label: 'Process Automation',
            discp: 'Streamlining workflows for operational efficiency.'
        },
        {
            id: '2',
            image: '/yellow.png',
            label: 'Data-Driven Insights',
            discp: 'Leveraging data for smarter decision-making.'
        },
        {
            id: '3',
            image: '/gray.png',
            label: 'Legacy System Upgrades',
            discp: 'Modernizing outdated systems for agility.'
        },
        {
            id: '4',
            image: '/yellow.png',
            label: 'Technology Roadmaps',
            discp: 'Strategic planning for digital evolution.'
        },
    ],
    [
        {
            id: '1',
            image: '/gray.png',
            label: 'Real-Time Monitoring',
            discp: 'Continuous oversight for optimal system health.'
        },
        {
            id: '2',
            image: '/yellow.png',
            label: 'Automated Testing',
            discp: 'Efficient testing to ensure functionality and reliability.'
        },
        {
            id: '3',
            image: '/gray.png',
            label: 'Performance Metrics',
            discp: 'Tracking KPIs to measure system performance.'
        },
        {
            id: '4',
            image: '/yellow.png',
            label: 'Risk Mitigation',
            discp: 'Identifying and addressing potential issues early.'
        },
    ],
    [
        {
            id: '1',
            image: '/gray.png',
            label: 'Threat Detection',
            discp: 'Identifying vulnerabilities before they impact you.'
        },
        {
            id: '2',
            image: '/yellow.png',
            label: 'Data Encryption',
            discp: 'Securing data with advanced encryption protocols.'
        },
        {
            id: '3',
            image: '/gray.png',
            label: 'Access Control',
            discp: 'Limiting system access to authorized personnel.'
        },
        {
            id: '4',
            image: '/yellow.png',
            label: 'Incident Response',
            discp: 'Rapid response plans for cybersecurity threats.'
        },
    ],
    [
        {
            id: '1',
            image: '/gray.png',
            label: 'Tailored Development',
            discp: 'Creating solutions unique to your goals.'
        },
        {
            id: '2',
            image: '/yellow.png',
            label: 'Seamless Integration',
            discp: 'Ensuring compatibility with existing systems.'
        },
        {
            id: '3',
            image: '/gray.png',
            label: 'Future-Proofing',
            discp: 'Scalable solutions that grow with your business.'
        },
        {
            id: '4',
            image: '/yellow.png',
            label: 'Ongoing Support',
            discp: 'Continuous support for evolving business needs.'
        },
    ],
];

export default function CompanyStructure({ currentIndex, headings, headingDiscp }: CompanyStructureProps) {
    { console.log("currentIndex", currentIndex) }
    return (
        <>
            {/* <section id='companyStructure' className='min-h-svh lg:min-h-screen'> */}

                <div className='grid px-4 md:px-12 lg:px-24  md:py-6 mt-24 md:mt-20 content-start md:content-center  '>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className='grid grid-cols-1 md:grid-cols-2 justify-between md:gap-14 lg:gap-28'>
                        
                        <Image
                             src="/hero2.png"
                             width={500}
                              height={100}
                             className="absolute z-[-1] left-0 opacity-50 transform translate-y-[-140px] translate-x-[-200px] hidden md:block h-[600]"
                             alt="Hero section image"
                            />

                        
                        <div className="flex flex-col  py-2 lg:py-0">
                        
                            <motion.h1
                                key={`heading-${currentIndex}`}
                                className="text-xl md:text-2xl lg:text-3xl font-medium"
                                initial={{ opacity: 1, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{duration: 0.7 , ease: 'easeInOut'}}
                            >
                                {headings[currentIndex]}
                            </motion.h1>
                            <motion.p
                                key={`headingDiscp-${currentIndex}`}
                                className="text-xs lg:text-base font-medium text-[#00000099] pt-2 pb-4 lg:pt-4 lg:pb-16"
                                initial={{ opacity: 1, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 , ease: 'easeInOut'}}
                            >
                                {headingDiscp[currentIndex]}
                            </motion.p>
                            <Image
                                src="/ITeqpt.jpeg"
                                width={487}
                                height={311}
                                className="hidden md:block lg:w-96 lg:h-56  md:w-80 md:h-48 rounded-[40px] object-cover"
                                alt="Hero section image"
                            />
                        </div>

                        <div className='grid grid-cols-1 justify-items-start gap-2 md:gap-x-10 md:gap-y-7 lg:gap-x-20 lg:gap-y-5 '>
                            {companyInfraStructure[currentIndex]?.map((structure) => {
                                return (
                                        <motion.div
                                            key={structure.id}
                                            className="flex flex-row"
                                            initial={{ opacity: 1, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7 , ease: 'easeInOut'}}
                                        >
                                            {/* currentIndex === parseInt(structure.id) - 1 ? { opacity: 1, y: 0 } : */}
                                            <Image
                                                width={106}
                                                height={106}
                                                alt='IT Imge'
                                                src={structure.image}
                                                className='w-10 h-10 rounded-sm lg:w-20 lg:h-20 lg:rounded-3xl'
                                            />
                                            <div
                                                className='flex flex-col ml-4 lg:ml-8 justify-center '>
                                                <p className="text-xs md:text-sm lg:text-lg font-semibold ">
                                                    {structure.label}
                                                </p>
                                                <p className="text-xs font-medium text-[#00000099] py-1 lg:py-3">
                                                    {structure.discp}
                                                </p>
                                            </div>
                                        </motion.div>
                                );
                            }) || <p>No data available for this section.</p>}
                        </div>
                    </motion.div>
                </div>
            {/* </section > */}
        </>
    )
}
