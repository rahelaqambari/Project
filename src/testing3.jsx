import React, { useState } from 'react'

function Test3() {
    const [paly, setplay] = useState();
  return (
    <div className='w-full flex h-screen bg-gradient-to-br from-purple-800 to-pink-700 via-red-700 animate-pulse duration-300'>
        <video controls width={300}>
            <source src='app.css'/>
        </video>
        <h1>Title: motive</h1>
        <div className='flex justify-between gap-1 items-center'>
          <h1>Views: 34</h1>
          <h1>Rating: 10</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ut? Nihil sit aut repudiandae? Laudantium, aliquam! Reiciendis consectetur odit vitae totam aperiam, doloribus facere vel amet veniam, excepturi eum perferendis.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolorem tempora ex blanditiis quia maiores quae natus quas soluta dignissimos rerum illum fugit excepturi, maxime omnis quidem laudantium ipsa ab.</p>
      <button onClick={setplay. reting+2, views+1}>Play</button>

    </div>
  )
}

export default Test3
