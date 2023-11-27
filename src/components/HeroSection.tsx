import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='mt-10 bg-cover bg-center h-[94vh] items-center  'id='HeroSection' >
        <div className="hero-section  text-white py-16 px-4 text-center my-auto">
            <p className="text-5xl	 leading-relaxed ">
            Empowering Land Ownership <br />
            with
            <span className='text-[#F62898] ml-3'>
                Blockchain Technology
            </span> 
            </p>
            <p className='text-sm'>
            Unlock the Future of Secure, Transparent, and Efficient Land Records Management
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-10">
                <button className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300 ease-in-out">
                    Get Started
                </button>
                <button className="bg-transparent text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out">
                    <Link href={'/sign-in'}>Sign In</Link>
                </button>
    
        </div>
    </div>
    </div>
  )
}

export default HeroSection