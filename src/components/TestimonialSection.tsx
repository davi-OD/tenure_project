"use client"
// components/TestimonialSection.tsx
import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection: React.FC = () => {
    const [activePage, setActivePage] = useState(0);
    const testimonialsPerPage = 3;

    // Mock data - replace with your actual data
    const testimonials = [
        {
            quote: 'Great service and wonderful experience!',
            author: 'Alice Johnson',
            title: 'Software Engineer',
            image: '/alice_johnson.jpg',
        },
        {
            quote: 'Absolutely loved the journey! Highly recommended.',
            author: 'Benjamin Adams',
            title: 'Marketing Manager',
            image: '/benjamin_adams.jpg',
        },
        {
            quote: 'An unforgettable trip with amazing views!',
            author: 'Charlotte Smith',
            title: 'Event Planner',
            image: '/charlotte_smith.jpg',
        },
        {
            quote: 'Exceeded my expectations! A fantastic cruise.',
            author: 'David Wilson',
            title: 'Architect',
            image: '/david_wilson.jpg',
        },
        {
            quote: 'Absolutely mesmerizing experience on board!',
            author: 'Emma Brown',
            title: 'Graphic Designer',
            image: '/emma_brown.jpg',
        },
        {
            quote: 'The cruise was incredible, loved every moment!',
            author: 'Franklin Miller',
            title: 'Financial Analyst',
            image: '/franklin_miller.jpg',
        },
        {
            quote: 'A beautiful voyage with exceptional service.',
            author: 'Grace Anderson',
            title: 'Teacher',
            image: '/grace_anderson.jpg',
        },
        {
            quote: 'Amazing cruise with breathtaking sights!',
            author: 'Henry Martinez',
            title: 'Chef',
            image: '/henry_martinez.jpg',
        },
        {
            quote: 'A dream come true! Loved every bit of it.',
            author: 'Isabella Clark',
            title: 'Writer',
            image: '/isabella_clark.jpg',
        },
        {
            quote: 'Unbelievably stunning experience. Loved it!',
            author: 'Jack Thompson',
            title: 'Photographer',
            image: '/jack_thompson.jpg',
        },
        {
            quote: 'Couldn’t have asked for a better cruise!',
            author: 'Katherine Lee',
            title: 'Doctor',
            image: '/katherine_lee.jpg',
        },
        {
            quote: 'Incredible journey with amazing staff!',
            author: 'Liam Harris',
            title: 'Athlete',
            image: '/liam_harris.jpg',
        },
        {
            quote: 'Mind-blowing experience! Highly recommended.',
            author: 'Mia Carter',
            title: 'Artist',
            image: '/mia_carter.jpg',
        },
        {
            quote: 'An amazing cruise with lovely people!',
            author: 'Noah King',
            title: 'Entrepreneur',
            image: '/noah_king.jpg',
        },
        {
            quote: 'Absolutely fantastic journey. Loved every moment!',
            author: 'Olivia Taylor',
            title: 'Journalist',
            image: '/olivia_taylor.jpg',
        },
    ];

    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const getPageTestimonials = () => {
        const startIndex = activePage * testimonialsPerPage;
        const endIndex = startIndex + testimonialsPerPage;
        return testimonials.slice(startIndex, endIndex);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-center mb-8">Testimonials</h1>

            <div className="flex justify-center items-center">
                <div className="w-full md:w-2/3">
                    <div className="relative overflow-hidden">
                        <div className="flex transition-all duration-300 ease-in-out">
                            {getPageTestimonials().map((testimonial, index) => (
                                <div key={index} style={{ flex: '0 0 33.333%' }}>
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActivePage(index)}
                                className={`w-4 h-4 mx-1 rounded-full ${activePage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
