import React from 'react'

function Cards() {
  return (
    <div className='grid lg:grid-cols-5 gap-5 p-4 '>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounde-lg">
            <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">*234</p>
                <div className="text-gray-600">Lorem</div>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg"><span className="text-green-700 text-lg">+18m</span></p>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounde-lg">
        <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">*234</p>
                <div className="text-gray-600">Lorem</div>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg"><span className="text-green-700 text-lg">+18m</span></p>
        </div>
        <div className="col-span-1 bg-white flex justify-between w-full border p-4 rounde-lg">

        <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">*234</p>
                <div className="text-gray-600">Lorem</div>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg"><span className="text-green-700 text-lg">+18m</span></p>
        </div>
    </div>
  )
}

export default Cards