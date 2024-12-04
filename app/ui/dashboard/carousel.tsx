'use client';
import ArrowLeftIcon from '@heroicons/react/24/outline/ArrowLeftIcon';
import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Card {
    image: string;
    title: string;
    designation: string;
    description: string;
}

interface CardCarouselProps {
    cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardWidth = 100 / 3; // Adjust based on the number of cards visible at a time (e.g., 3 cards)

    // Next and Previous slide functions
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 < cards.length ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="grid px-4 md:px-12 lg:px-24 md:py-4 mt-24 md:mt-20 content-start md:content-center ">
            {/* Carousel container with horizontal scrolling */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 gap-4 w-full">
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-sm md:text-2xl lg:text-4xl font-medium'>What Our Client Said About <br/>Us</h1>
                    <div className='flex flex-row justify-end'>
                        <button onClick={prevSlide} className="p-2 lg:p-4 mx-5 text-[#37535E] bg-[#F8F9FF] rounded-full">
                            <ArrowLeftIcon className='w-5' />
                        </button>
                        <button onClick={nextSlide} className="p-2 lg:p-4 text-[#CEFD63] bg-[#37535E] rounded-full">
                            <ArrowRightIcon className='w-5' />
                        </button>
                    </div>
                </div>
                <div className="flex overflow-hidden">
                    <div className="flex transition-transform duration-700 ease-in-out "
                        style={{ transform: `translateX(-${currentIndex * cardWidth}%)` }}>
                        {cards.map((card, index) => (
                            <div key={index}
                                className={`flex-shrink-0 w-full max-w-xs p-4 bg-[#37535E] rounded-lg shadow-lg lg:mx-5 md:mr-5 mr-5 lg:px-10 px-5
                            ${index === currentIndex ? 'bg-[#37535E] text-[#fff]' : 'bg-[#CEFD63] text-[#000000CC]'}`}>
                                <div className="flex flex-col h-auto ">
                                    <div className="flex gap-4">
                                        <img src={card.image} alt={card.title} className="w-16 h-16 rounded-full" />
                                        <div>
                                            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">{card.title}</h2>
                                            <h3 className="mt-2 text-sm md:text-lg lg:text-xl">{card.designation}</h3>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-xs ">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div >
    );
};

export default CardCarousel;
