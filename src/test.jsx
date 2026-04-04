import React from 'react'

function Testing() {
  return (
    <div className='h-screen w-full flex items-center justify-center gap-4'>
        <h1>Rajester Form</h1>
      <form action="" className="w-9/12 border shadow sahdow-2xl bg-gray-200 rounded-md">
        <label className='py-2px-4 text-xl font-bold'>Name</label>
        <input className='border outline:0 rounded-md p-4' type="text" />
        <label className='py-2px-4 text-xl font-bold'>Last Name</label>
        <input className='border outline:0 rounded-md p-4' type="text" />
        <label className='py-2px-4 text-xl font-bold'>Phon Number</label>
        <input className='border outline:0 rounded-md p-4' type="text" />
        <input className='border outline:0 rounded-md p-4 bg-gray-600' type="submit" />
      </form>
    </div>
  )
}

export default Testing
