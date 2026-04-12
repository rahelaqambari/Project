import React from 'react'

function Footer2() {
  return (
   <div className="w-full bg-gray-100  flex  items-center justify-between py-8 px-4">
    <h1 className='text-3xl font-serif text-black'>Logo</h1>
    <div className='flex gap-3'>
      <button className='text-black py-2 px-3 bg-gray-50 rounded-md text-meduim'>Login</button>
      <button className='text-black py-2 px-3 bg-gray-50 rounded-md text-meduim'>rejester</button>
    </div>
        {/* <h1 className="text-3xl font-bold text-white">{new Date().getFullYear()} &copy; all right reserved</h1> */}
      </div>
  )
}

export default Footer2
