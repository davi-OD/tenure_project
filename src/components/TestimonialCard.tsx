// components/TestimonialCard.tsx
import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
interface Testimonial {
    quote: string;
    author: string;
    title: string;
    image: StaticImageData;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    const { quote, author, title, image } = testimonial;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto">
            <div className="text-center">
                <p className="text-gray-800 text-lg">{quote}</p>
                <div className="mt-4 flex flex-col md:flex-row items-center">
                    <div className="w-full sm:w-1/3 flex-shrink-0">
                        <div className="rounded-full h-20 w-20 overflow-hidden items-center">
                            <Image className="object-cover w-full h-full mx-auto" src={image} alt="Profile" />
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4 flex-grow">
                        <p className="text-gray-900 font-semibold">{author}</p>
                        <p className="text-gray-600">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;