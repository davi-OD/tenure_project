// components/ContactForm.js
"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formData;

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log(formData); // For example, you can log the form data
    };

    return (
        <div className="w-full h-auto mx-auto mt-[-4rem] md:bg-transparent text-white  ">
            <div className="max-w-md mx-auto bg-black bg-opacity-30 rounded-lg p-6 shadow-lg border-[2px] border-pink-700">
                <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Contact Us</h2>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}
                            rows={4}
                            className="border rounded w-full py-2 px-3 text-gray-700"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        // id='button'
                        className="bg-pink-600 text-white p-2 px-4 rounded hover:bg-blue-600 self-center w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;