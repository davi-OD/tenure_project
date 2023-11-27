import Link from "next/link";
import Cards from '@/components/Cards'
import Forms from '@/components/Forms'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SignIn from '@/components/SignIn'
import Users from '@/components/Users'
import Image from 'next/image'

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    // return <Link href="/dashboard">Dashboard</Link>
    return (
      <Sidebar>
      <main className='bg-gray-100 min-h-screen'>
        <Header/>
        <Cards/>
        <div className="p-6">
        <Users/>
        <Forms/>
        {/* <SignIn/> */}
        </div>
        
      </main>
    </Sidebar>
    )
  }