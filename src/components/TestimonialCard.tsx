// components/TestimonialCard.tsx
import React from 'react';

interface Testimonial {
    quote: string;
    author: string;
    title: string;
    image: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    const { quote, author, title, image } = testimonial;

    return (
        <div className="w-full flex-shrink-0 pr-4">
            <div className="bg-white p-6 rounded-md shadow-md flex items-center">
                <img src={image} alt={author} className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <p className="text-gray-600 mb-1">{quote}</p>
                    <p className="text-gray-800 font-semibold">{author}</p>
                    <p className="text-gray-500">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
