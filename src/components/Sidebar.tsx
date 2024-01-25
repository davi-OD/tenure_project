

// const Sidebar = async ({ children }: any) => {
//     // const { isLoaded, userId, sessionId, getToken } = userAuth();
//     const { userId } = await auth();
//     const isAuth = !!userId;
//     function connectWallet(): void {
//         throw new Error('Function not implemented.')
//     }

//     return (
//         <div className='flex'>
//             <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
//                 <div className="flex flex-col items-center">
//                     
//                     <div className="">
//                         {!isAuth ? (
//                             <>
//                                 <Link href='/sign-in'>
//                                     <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
//                                         <FiSettings size={20} />
//                                     </div>

//                                 </Link>
//                                 <Link href='/sign-up'>
//                                     <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
//                                         <FiSettings size={20} />
//                                     </div>

//                                 </Link>
//                             </>
//                         ) : (
//                             <>
//                                 {" "}
//                                 <Link href='/profile'>
//                                     <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
//                                         <RxPerson size={20} />
//                                     </div>

//                                 </Link>
//                                 <li>
//                                     <UserButton afterSignOutUrl='/' />
//                                 </li>
//                             </>
//                         )}

//                         {/* <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
//                             {currentUser ? (
//                                 <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
//                                     {currentUser}
//                                 </p>
//                             ) : (
//                                 <button
//                                     onClick={() => connectWallet()}
//                                     className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex'>Connect Wallet</button>
//                             )}
//                         </div> */}
//                     </div>

//                 </div>
//             </div>
//             <main className='ml-20 w-full'>{children}</main>
//         </div>
//     )
// }

// export default Sidebar

import Link from 'next/link';
import NavLinks from '@/components/nav-links';
import { RxExit } from "react-icons/rx";

import { UserButton, SignOutButton } from '@clerk/nextjs'

export default function Sidebar() {


    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-violet-600 p-4 md:h-40"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    <h1>Land Trust Chain</h1>
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>



                <div className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-violet-100 hover:text-violet-950 md:flex-none md:justify-start md:p-2 md:px-3">
                    <RxExit className="w-6" />
                    <SignOutButton>
                        <button><p className="hidden md:block">Sign out</p></button>
                    </SignOutButton>

                </div>

            </div>
        </div>
    );
}

