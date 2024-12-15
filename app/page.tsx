'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CardCarousel from './ui/dashboard/carousel';
import Bottom from './ui/dashboard/bottom';
import Pricing from './ui/dashboard/pricing';
import Journey from './ui/dashboard/journey';
import OurTeam from './ui/dashboard/ourTeam';
import BannerCTA from './ui/dashboard/bannerCTA';
import OurWork from './ui/dashboard/ourWork';
import CompanyStructure from './ui/dashboard/companyStructure';
import CompanyStatus from './ui/dashboard/companyStatus';
import HeroSection from './ui/dashboard/heroSection';
import useInView from './ui/useInView';



const cards = [
  {
    id: '1',
    image: '/team1.jpeg',
    title: 'Card 1',
    designation: 'Chief Manager',
    description: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
  },
  {
    id: '2',
    image: '/team2.jpeg',
    title: 'Card 2',
    designation: 'Chief Manager',
    description: 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, its got to be Embrace!',
  },
  {
    id: '3',
    image: '/team3.jpeg',
    title: 'Card 3',
    designation: 'Chief Manager',
    description: 'Embrace really nails it! Creative brilliance, approachable style. Theyre the partners you want—artistry meets strategy. Thrilled with what they achieved!"',
  },
  {
    id: '4',
    image: '/team4.jpeg',
    title: 'Card 4',
    designation: 'Chief Manager',
    description: 'Description for Card 4',
  },
  {
    id: '5',
    image: '/team5.jpeg',
    title: 'Card 5',
    designation: 'Chief Manager',
    description: 'Description for Card 5',
  },
];
const headings = [
  ['IT Infrastructure Management'],
  ['Digital Transformation Consulting'],
  ['Quality Assurance & Monitoring'],
  ['Cyber security Solutions'],
  ['Custom IT Solutions'],
];

const headingDiscp = [
  ['End-to-end solutions for network management, cloud integration, and infrastructure optimization.'],
  ['Helping organizations transition seamlessly into the digital age, boosting efficiency and innovation.'],
  ['Reliable surveillance and monitoring to ensure your systems perform optimally, reducing risks and downtime.'],
  ['Safeguarding your business with cutting-edge security measures tailored to your specific needs.'],
  ['Safeguarding your business with cutting-edge security measures tailored to your specific needs.'],
];

const sections = [
  HeroSection,
  CompanyStatus,
  CompanyStructure,
  OurWork,
  BannerCTA,
  OurTeam,
  CardCarousel,
  Journey,
  Pricing,
  Bottom
]

export default function Page() {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollLock, setScrollLock] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const accumulatedDeltaY = useRef<number>(0);
  const scrollTimeout = useRef<boolean>(false);

  const scrollToSection = (index: number) => {
    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = (event: WheelEvent) => {
    // Accumulate deltaY values
    accumulatedDeltaY.current += event.deltaY;

    if (scrollLock) {
      event.preventDefault();
      return;
    }

    if (!scrollTimeout.current) {
      scrollTimeout.current = true;
      setTimeout(() => {
        const threshold = 50; // Sensitivity for scrollpad adjustments
        if (accumulatedDeltaY.current > threshold && currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        } else if (accumulatedDeltaY.current < -threshold && currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
        accumulatedDeltaY.current = 0;
        scrollTimeout.current = false;
      }, 100); // Adjust for responsiveness
    }
  };

  const handleCompanyStructureScroll = (event: WheelEvent) => {
    if (currentSection === 2) {
      event.preventDefault();

      if (contentIndex === 0 && event.deltaY > 0) {
        setScrollLock(true);
      } else if (contentIndex === 0 && event.deltaY < 0) {
        setScrollLock(false);
      }

      if (event.deltaY > 0 && contentIndex < headings.length - 1) {
        setContentIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < 0 && contentIndex > 0) {
        setContentIndex((prevIndex) => prevIndex - 1);
      } else if (event.deltaY > 0 && contentIndex === headings.length - 1) {
        setScrollLock(false);
        setCurrentSection((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection]);

  useEffect(() => {
    if (currentSection === 2) {
      setScrollLock(true);
      window.addEventListener('wheel', handleCompanyStructureScroll, { passive: false });
    } else {
      setScrollLock(false);
      window.removeEventListener('wheel', handleCompanyStructureScroll);
    }
    return () => window.removeEventListener('wheel', handleCompanyStructureScroll);
  }, [currentSection, contentIndex]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [scrollLock, currentSection]);




  return (
    <main className="grid grid-cols-1">
      {/* <NavBar /> */}
      <div className="flex grow flex-col gap-4">
        {/* Hero Sections */}

        {sections.map((Section, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                sectionRefs.current[index] = el; // Store the reference
              }
            }}
            className="min-h-screen grid grid-cols-1 "
            // className="min-h-screen flex items-center  py-6 md:py-0 lg:my-6 overflow-hidden"
          
          >
            <Section currentIndex={contentIndex} headings={headings} headingDiscp={headingDiscp} cards={cards} />
            {/* <CompanyStructure currentIndex={3} /> */}
            {/* <CardCarousel cards={cards} /> */}
          </div>
        ))}

      </div>
      <footer className='bg-black grid grid-cols-1 md:grid-cols-2  md:justify-items-stretch px-6 md:px-12 lg:px-24 py-3 md:py-6 lg:py-12 content-center'>
        <p className='text-white text-xs md:text-sm lg:text-sm font-medium text-center md:text-left '>© 2022 Embrace, Inc. - All Rights Reserved</p>
        <div className='grid grid-cols-2 md:grid-cols-2 justify-items-center md:justify-items-end py-3 md:py-0'>
          <p className='text-white text-xs md:text-sm lg:text-sm'>Terms of use</p>
          <p className='text-white text-xs md:text-sm lg:text-sm'>Privacy policy</p>
        </div>
      </footer>
    </main>
  );
}

