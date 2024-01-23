// 'use client'
import Link from "next/link";
import Cards from '@/components/Cards'
import Forms from '@/components/Forms'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SignIn from '@/components/SignIn'
import Users from '@/components/Users'
import Image from 'next/image'
import { LandContext, LandProvider } from "@/Context/LandContext";
import { useContext, useEffect, useState } from "react";
import Table from "@/components/Table";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  // return <Link href="/dashboard">Dashboard</Link>
  // const {
  //   currentUser,
  //   createLandDetail,
  //   getLandDetail,
  //   getLandInfoCount,
  //   getAllLandInfo
  // } = useContext(LandContext)

  // // STATE VARIABLES
  // const [createLandDetailModel, setCreateLandDetailModel] = useState(false)
  // const [getLandModel, setLandModel] = useState(false)
  // const [allLandData, setAllLandData] = useState()
  // const [openProfile, setOpenProfile] = useState(false)

  // useEffect((): any => {
  //   const getLandData = getAllLandInfo();

  //   return async () => {
  //     const allData = await getLandData
  //     setAllLandData(allData)
  //   }
  // }, [])

  return (

      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <Cards />
        {/* <Table
          setCreateLandDetailModel={setCreateLandDetailModel}
          allLandData={allLandData}
        />

        <Forms
        createLandDetailModel={createLandDetailModel}
        createLand={createLand}
        setCreateLandDetailModel={setCreateLandDetailModel}
        />

        <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser = {currentUser}
        />

        <getLandDetail
        getLandModel={getLandModel}
        setLandModel={setLandModel}
        /> */}

        {/* <div className="p-6">
            <Users />
            <Forms />

          </div> */}

      </main>

  )
}
