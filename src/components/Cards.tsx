// import React from 'react'

// function Cards() {
//   return (
//     <div className='grid lg:grid-cols-5 gap-5 p-4 '>
//         <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounde-lg">
//             <div className="flex flex-col w-full pb-4">
//                 <p className="text-2xl font-bold">*234</p>
//                 <div className="text-gray-600">Lorem</div>
//             </div>
//             <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg"><span className="text-green-700 text-lg">+18m</span></p>
//         </div>
//         <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounde-lg">
//         <div className="flex flex-col w-full pb-4">
//                 <p className="text-2xl font-bold">*234</p>
//                 <div className="text-gray-600">Lorem</div>
//             </div>
//             <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg"><span className="text-green-700 text-lg">+18m</span></p>
//         </div>
//         <div className="col-span-1 bg-white flex justify-between w-full border p-4 rounde-lg">

//         <div className="flex flex-col w-full pb-4">
//                 <p className="text-2xl font-bold">*234</p>
//                 <div className="text-gray-600">Lorem</div>
//             </div>
//             <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg"><span className="text-green-700 text-lg">+18m</span></p>
//         </div>
//     </div>
//   )
// }

// export default Cards

// import {
//     BanknotesIcon,
//     ClockIcon,
//     UserGroupIcon,
//     InboxIcon,
//   } from '@heroicons/react/24/outline';
//   import { lusitana } from '@/app/ui/fonts';
//   import { fetchCardData } from '@/app/lib/data';

//   const iconMap = {
//     collected: BanknotesIcon,
//     customers: UserGroupIcon,
//     pending: ClockIcon,
//     invoices: InboxIcon,
//   };

export default async function CardWrapper() {
    // const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = await fetchCardData();
    return (
        <>
            {/* NOTE: comment in this code when you get to this point in the course */}

            <Card title="Collected" value='{}' type="collected" />
            <Card title="Pending" value='{}' type="pending" />
            <Card title="Total Invoices" value='{}' type="invoices" />
            <Card
                title="Total Customers"
                value='{}'
                type="customers"
            />
        </>
    );
}

export function Card({
    title,
    value,
    type,
}: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
    // const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p
                className={`
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {value}
            </p>
        </div>
    );
}
