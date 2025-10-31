import React from 'react'

function Portfolio() {
  return (
    <div className='h-screen w-full bg-amber-800 gap-12 flex'>
        <div className='w-[40%] h-full'>
            <img className='h-full w-full' src="/img/computer.jpg" alt="" />
        </div>
        <div className='w-[50%] flex flex-col items-center justify-center gap-8'>
            <h1 className='text-4xl font-bold text-white'>MY-DREAM-STUDIO</h1>
            <p className='text-base text-white text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quam praesentium, perferendis omnis quo fugit odit inventore nulla veniam cumque laudantium debitis distinctio excepturi aut nisi asperiores doloremque animi facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi cumque laborum perspiciatis accusamus voluptatibus, dolor nam incidunt placeat fugit minus optio facere quibusdam autem aliquid voluptatem? Numquam, reiciendis nam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores veniam laborum optio doloribus sunt distinctio consequatur provident accusamus rerum incidunt impedit dolor, sequi nobis eveniet illo excepturi fugiat cupiditate?</p>
        </div>
      
    </div>
  )
}

export default Portfolio
