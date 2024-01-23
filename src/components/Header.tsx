import { UserButton } from '@clerk/nextjs'
// import { currentUser, connectWallet } from "../Context/LandContext"

function Header() {
  return (
    <div className='flex justify-end px-4 gap-x-14'>
      {/* <h2>Welcome Back, David</h2> */}
      <w3m-button />
      <UserButton afterSignOutUrl='/' />
      {/* <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
        {currentUser ? (
          <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
            {currentUser}
          </p>
        ) : (
          <button
            onClick={() => connectWallet()}
            className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex'>Connect Wallet</button>
        )}
      </div> */}
    </div>
  )
}

export default Header