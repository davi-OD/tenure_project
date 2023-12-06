import React from 'react'
import Alienimage from '@/Images/alien-backgroun.png'
import { Image } from 'next/dist/client/image-component'
function AboutSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start px-4 md:px-8 py-6" id='about-section'>
      {/* Left content */}
      <div className="md:w-1/2 md:pr-8">
        <div className='text-center items-center my-6'>
          <p className='text-xl text-white font-bold md:text-left text-center'>
            About <span className='text-pink-800'>
              LandVault
            </span>
          </p>
          <p className='text-white md:text-left text-center my-10'>
            At LandVault, we believe in the transformative power of blockchain technology.
            Our journey began with a simple yet profound goal: to reshape the global landscape
            of land ownership, bringing transparency, security, and efficiency to the forefront.
          </p>
          <div>
            <button className="bg-transparent border-2 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>

          </div>

        </div>

      </div>
      {/* Right image */}
      <div className="md:w-1/2  md:mt-0 items-center">
        <div className='items-center'>
          <Image
            src={Alienimage}
            alt="Image"
            className="w-50 h-30 rounded-md mx-auto"
            id='image'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSection