import React from 'react'

function Box() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='w-[40%] h-[50%] border border-white outline-1 outline-cyan-800 bg-cyan-700 rounded-2xl flex flex-col justify-center items-center'> 
        <h1 className='text-4xl text-white font-bold bg-gradient-to-l'>SANABAHAR</h1>
        <h1 className='text-white text-2xl font-bold'>Welcome to The Sanabahar Studio</h1>
      </div>
    </div>
  )
}

export default Box
