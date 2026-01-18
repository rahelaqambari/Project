import React, { useRef } from 'react'

function Sample() {
  const input = useRef('');
  const hndelClick = ()=>{
    input.current.focus();
  }
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col gap-3 '>
      <input className='p-4 focus:outline-0 border focus:border-0 focus:ring-1 focus:ring-blue-600 rounded-md w-7/12' type="text" ref={input} placeholder='Enter Your Name' />
      <input className='p-4 focus:outline-0 border focus:border-0 focus:ring-1 focus:ring-blue-600 rounded-md w-7/12' type="text" ref={input} placeholder='Enter Your LastName' />
      <input className='p-4 focus:outline-0 border focus:border-0 focus:ring-1 focus:ring-blue-600 rounded-md w-7/12' type="text" ref={input} placeholder='Enter Your Email' />
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      
      <button className='font-bold py-2 px-4 text-2xl focus:-transition-3 duration-150 rounded-md bg-blue-600 text-white' onClick={hndelClick}>Save</button>
      {/* <div className='h-32 w-32 rounded-full bg-linear-to-r from-0% to-green-800 animate-spin border-8 text-clip bg-transparent text-3xl'></div> */}
    </div>
  )
}

export default Sample
