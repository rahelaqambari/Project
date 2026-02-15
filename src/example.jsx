import React, { useRef } from 'react'

function Example() {
   const text = useRef("");
   function change (){
    text.current.textContent = "Now You Are A Hero"
   }
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center'>
      <h1 ref={text} className='text-4xl bg-linear-120 from-blue-400 to-green-500 via-orange-600 p-4 animate-bounce text-transparent bg-clip-text font-bold '> Never Give Up 🎓🏆</h1>
      <button onClick={change} className='bg-green-600 py-3 px-8 text-white font-bold'>Try</button>
    </div>
  )
}

export default Example
