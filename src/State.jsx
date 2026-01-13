import React, { useState } from 'react'

function State() {
    const [number,setnumber] = useState (0);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>{number}</h1>
      <div className='p-12 flex gap-12'>
        <button className='bg-red-800 py-4 px-6 rounded-md text-white' onClick={()=>{setnumber(number+1)}}> Incremant</button>
        <button className='bg-green-800 py-4 px-6 rounded-md text-white' onClick={()=>{ setnumber(number-1)}}>Decremant</button>
      </div>
    </div>
  )
}

export default State
