"use client"
// components/TestimonialSection.tsx
import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import Image1 from '@/Images/testimonies/marketting.webp';
import Image2 from '@/Images/testimonies/consultant.jpg';
import Image3 from '@/Images/testimonies/planner.jpg'
import Image4 from '@/Images/testimonies/0x0.webp'
import Image5 from '@/Images/testimonies/premium_photo-1683141136472-bd21514555a2.avif'
import Image6 from '@/Images/testimonies/software.jpeg'
import Image7 from '@/Images/testimonies/trust-among-black-business-owners-final-version-promo.jpg'
import Image8 from '@/Images/testimonies/businesswoman-1.webp'
import Image9 from '@/Images/testimonies/960x0.webp'
import Image10 from '@/Images/testimonies/images (1).jpg'
import Image11 from '@/Images/testimonies/designer.jpg'
import Image12 from '@/Images/testimonies/owner.jpg'



const TestimonialSection: React.FC = () => {
    const [activePage, setActivePage] = useState(0);
    const testimonialsPerPage = 3;

    // Mock data - replace with your actual data
    const testimonials = [
        {
            quote: "LandVault has been a game-changer for our community. With their platform, we've been able to securely manage our land records, resolve disputes, and unlock economic opportunities. It's more than just technology; it's empowerment.",
            author: 'Alice Johnson',
            title: 'Software Engineer',
            image: Image1,
        },
        {
            quote: "I was skeptical about blockchain technology, but LandVault has won me over. The efficiency and trustworthiness of their platform have made a significant impact on my real estate business. I highly recommend it to fellow professionals.",
            author: 'Benjamin Adams',
            title: 'Marketing Manager',
            image: Image2,
        },
        {
            quote: "LandVAult has been a game-changer for our community. With their platform, we've been able to securely manage our land records, resolve disputes, and unlock economic opportunities. It's more than just technology; it's empowerment.",
            author: 'Charlotte Smith',
            title: 'Event Planner',
            image: Image3
        },
        {
            quote: "LandVAult has not only met but exceeded my highest expectations! Their platform provided an unparalleled experience in handling land assets. From managing records to analyzing market trends, it's a comprehensive solution that redefines efficiency and security in property management.",
            author: 'David Wilson',
            title: 'Architect',
            image: Image4
        },
        {
            quote: "Using LandVAult was an extraordinary journey in managing land records. The platform's intuitive design, coupled with robust features, made the entire process seamless. It's not just about managing data; it's about unlocking potential and fostering growth.",
            author: 'Emma Brown',
            title: 'Graphic Designer',
            image: Image5
        },
        {
            quote: "Managing land assets with LandVAult was an incredible experience. Every moment spent analyzing data and trends was as thrilling as navigating financial markets. The platform offers insights that are not just informative but transformative.",
            author: 'Franklin Miller',
            title: 'Financial Analyst',
            image: Image6
        },
        {
            quote: "LandVAult's service is as exceptional as educating young minds. The voyage in managing land records was beautiful, guided by a team dedicated to excellence. The platform's support is akin to the guidance we offer in classrooms.",
            author: 'Grace Anderson',
            title: 'Teacher',
            image: Image7
        },
        {
            quote: "A land management journey with LandVAult was as satisfying as creating a perfect dish. Their exceptional service made the cruise through property data delightful. LandVAult's precision and support are akin to crafting a fine recipe.",
            author: 'Henry Martinez',
            title: 'Chef',
            image: Image8
        },
        {
            quote: "LandVAult made managing land records a dream come true! Every bit of their platform felt like crafting an engaging narrative. It's not just about managing assets; it's about writing a success story.",
            author: 'Isabella Clark',
            title: 'Writer',
            image: Image9
        },
        {
            quote: "LandVAult provided an unbelievably stunning experience in managing land assets. It's a photographer's delight capturing the essence of property insights. The platform's depth is like capturing the perfect photograph.",
            author: 'Jack Thompson',
            title: 'Photographer',
            image: Image10
        },
        {
            quote: "LandVAult provided a cruise through land management that I couldn't have asked for better. It's as reliable as the precision in medicine. The platform's support is like the precision we aim for in healthcare.",
            author: 'Katherine Lee',
            title: 'Director',
            image: Image11
        },
        {
            quote: "An incredible journey managing land assets with LandVAult. The platform's efficiency and support were on par with the dedication of an athlete. LandVAult's commitment matches an athlete's dedication.",
            author: 'Liam Harris',
            title: 'Athlete',
            image: Image12
        }
    ];

    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const getPageTestimonials = () => {
        const startIndex = activePage * testimonialsPerPage;
        const endIndex = startIndex + testimonialsPerPage;
        return testimonials.slice(startIndex, endIndex);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-center text-white">Testimonials</h1>
            <p className="text-white text-center mb-8">What they are saying about us</p>

            <div className="flex justify-center items-center">
                <div className="w-full md:w-full">
                    <div className="relative overflow-hidden">
                        <div className="flex flex-wrap transition-all duration-300 ease-in-out">
                            {getPageTestimonials().map((testimonial, index) => (
                                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-2  mx-auto">
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