import React, { useState } from 'react'

function NewPage() {
    const [time,settime] = useState(new Date().toLocaleTimeString());
  return (
    <div className='w-9/12 p-7 border rounded-md shadow-2xs border-t-red-500'>
      <h1 className='text-3xl font-bold text-center p-5'>It's {time} O'clock</h1>
      <p className='text-center p-4 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus temporibus illum natus placeat fugiat velit inventore molestiae dolores beatae nesciunt possimus, exercitationem autem aspernatur, laboriosam iste dolor tenetur aliquam!</p>
    </div>
  )
}

export default NewPage