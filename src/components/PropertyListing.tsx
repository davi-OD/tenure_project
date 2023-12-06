import React from 'react'
import PropertyCard from './PropertyCard'
import Image_1 from '@/Images/Frame 59545-1.jpg'
import Image_2 from '@/Images/Frame 59545-2.jpg'
import Image_3 from '@/Images/Frame 59545-3.jpg'
import Image_4 from '@/Images/Frame 59545.jpg'

// property data
const PropertyData = [
    {
        imageUrl: Image_1,
        description: 'Semi- detached, 4 bedroom duplex',
        location: 'Miami, USA',
        price: '0.38',
        unitsAvailable: 6,
        market: 'sale'
    },
    {
        imageUrl: Image_2,
        description: '4 Bedroom Terrence appartment ',
        location: 'Lagos, NG',
        price: '0.18',
        unitsAvailable: 3,
        market: 'rent'
    },
    {
        imageUrl: Image_3,
        description: '4 Bedroom Bungalow ',
        location: 'Kampala, UG',
        price: '0.23',
        unitsAvailable: 4,
        market: 'rent'
    },
    {
        imageUrl: Image_4,
        description: '2 Plots of land at sea Bay',
        location: 'Accra, Ghana',
        price: '0.43',
        unitsAvailable: 2,
        market: 'sale'
    }
];


export default function PropertyListing() {
    return (
        <div className='items-center py-6 mb-[5rem] '>
            <div>
                <p className='text-3xl text-white text-center '>
                    Property Listings
                </p>
                <p className='text-center text-white py-2 text-[13px]'>
                    Get a list of properties globally and start making safe and secure transactions
                </p>
            </div>
            <div className="flex items-center justify-between mx-auto w-[90%]">
                <div className="w-50 h-5 filter brightness-125 text-blue-50">
                    Filters
                </div>
                <div className='w-50 h-5 filter brightness-125'>
                    <a href="#" className="text-blue-500 hover:underline">See More</a>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {PropertyData.map((property, index) => (
                    <PropertyCard
                        key={index}
                        imageUrl={property.imageUrl}
                        description={property.description}
                        location={property.location}
                        price={property.price}
                        unitsAvailable={property.unitsAvailable}
                        market={property.market}
                    />
                ))}
            </div>
        </div>
    )
}
