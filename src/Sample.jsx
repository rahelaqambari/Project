import React, { useRef } from 'react'

function Sample() {
  const input = useRef();
  const hndelClick = ()=>{
    input.current.focus();
  }
  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
      <input type="text" ref={input} />
      {/* <div className='h-32 w-32 rounded-full bg-linear-to-r from-0% to-green-800 animate-spin border-8 text-clip bg-transparent text-3xl'></div> */}
    </div>
  )
}

export default Sample
