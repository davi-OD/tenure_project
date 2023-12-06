import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

const ContactUs = () => {
    return (
        <div className=" bg-transparent text-white p-4  shadow-lg w-[100%] bg-trabsparent mx-auto h-full my-10">
            <h2 className="text-lg font-semibold mb-2">Contact <span className='text-pink-500 font-semibold text-lg left'> Us </span></h2>
            <p>For inquiries, please reach out to us at:</p>
            <ul className="mt-2">

                <li>
                    <MailIcon className="w-5 h-5 inline mr-2" />
                    <a href="mailto:contact@example.com">contact@example.com</a>
                </li>
                <li className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    +1234567890
                </li>
            </ul>

            <h2 className="text-lg font-semibold mt-10">Follow Us on</h2>
            <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white hover:text-blue-600 cursor-pointer" size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white hover:text-pink-500 cursor-pointer" size={24} />
                </a>
            </div>
        </div>
    );
};

export default ContactUs;
