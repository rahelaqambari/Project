import React from 'react'

function Stadio() {
  return (
    <div className='h-fit w-full'>
        <div className='h-[70vh] flex w-full'>
            <div className='h-full w-1/2'>
                <img className='h-full w-full' src="/img/pexels-photo-585752.jpeg" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center h-full w-1/2 bg-white gap-6'>
              <h1 className='text-4xl text-center font-bold text-gray-800'>Be clam and enjoy from coffe</h1>
              <p  className='text-base text-gray-800 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolorem possimus voluptate consectetur, ratione fuga praesentium placeat facere quisquam molestias pariatur debitis distinctio minus temporibus esse. Quod aspernatur voluptate fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem natus, id, eligendi amet, recusandae iure quae ducimus ullam eaque magni? Magnam dicta necessitatibus alias earum ex dolorem voluptate cumque.</p>
            </div>
            </div>
              <div className='h-[70vh] flex w-full'>
                <div className='flex flex-col justify-center items-center h-full w-1/2 bg-gray-800 gap-6'>
              <h1 className='text-4xl text-center font-bold text-white'>Be clam and enjoy from coffe</h1>
              <p  className='text-base text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolorem possimus voluptate consectetur, ratione fuga praesentium placeat facere quisquam molestias pariatur debitis distinctio minus temporibus esse. Quod aspernatur voluptate fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem natus, id, eligendi amet, recusandae iure quae ducimus ullam eaque magni? Magnam dicta necessitatibus alias earum ex dolorem voluptate cumque.</p>
            </div>
            <div className='h-full w-1/2'>
                <img className='h-full w-full' src="/img/pexels-photo-1420709.webp" alt="" />
            </div>
            </div>        
    </div>
  )
}

export default Stadio
