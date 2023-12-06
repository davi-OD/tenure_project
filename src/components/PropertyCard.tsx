import Image from "next/image";
import { StaticImageData } from "next/image"
interface CardProps {
    imageUrl: StaticImageData;
    description: string;
    location: string;
    price: string;
    unitsAvailable: number;
    market: string // Assume 'sale' or 'rent'
}

const PropertyCard: React.FC<CardProps> = ({
    imageUrl,
    description,
    location,
    price,
    unitsAvailable,
    market
}) => {

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
            <Image
                className="w-full h-64 object-cover object-center"
                src={imageUrl}
                alt="Property Image"
            />

            <div className="p-4">
                <p className="text-gray-700 mb-4">{description}</p>
                <div className=" flex flex-wrap gap-10 w-[95%] mx-auto">
                    <p className="text-gray-600 mb-2 flex flex-wrap gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className="font-semibold text-sm">{location}</span>
                    </p>
                    <p className="text-gray-600 mb-2 flex flex-wrap gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>

                        <span className="font-semibold text-sm">{price} ETH</span>
                    </p>
                </div>
                <div className="flex flex-wrap gap-20 items-center w-[95%] mx-auto">
                    <p className="text-gray-900 mb-4 border p-1 rounded-lg w-[30%] text-center font-semibold">
                        {`${unitsAvailable} ${unitsAvailable >= 1 ? "units" : "unit"}`}
                    </p>
                    <p className="text-gray-900 mb-4 border p-1 rounded-lg w-[30%] text-center font-semibold">
                        {`For ${market}`}
                    </p>
                </div>
                <div className="flex justify-between">
                    {/* <button className={`w-[95%] mx-auto bg-${market === 'rent' ? 'blue' : 'green'}-400  hover:bg-${market === 'rent' ? 'blue' : 'green'}-800 text-white py-2 px-4 rounded inline-block`}>
            {market === 'rent' ? 'Rent Now' : 'Buy Now'}
          </button> */}
                    {market === 'sale' ? (
                        <button className="w-[95%] mx-auto bg-purple-400 hover:bg-purple-800 text-white py-2 px-4 rounded inline-block  ">
                            Buy Now
                        </button>

                    ) : (
                        <button className="w-[95%] mx-auto bg-green-400 hover:bg-green-800 text-white py-2 px-4 rounded inline-block ">
                            Rent Now
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
};
export default PropertyCard
