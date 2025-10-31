import React from 'react'

function Form() {
  return (
    <div className='h-screen w-full bg-black flex flex-col justify-center items-center gap-4'>
        <p className='text-amber-700'>DROP US A LINE</p>
        <h1 className='text-5xl text-white'>Round-The-Clock Services</h1>
        <p className='w-[95vh] text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque error aut eos itaque harum rem, quibusdam provident! Amet delectus architec.</p>
             <div className="h-[75%] rounded-2xl w-[60%] bg-neutral-900 shadow-2xl items-center flex gap-5 flex-col  justify-center"> 
                <div className='flex justify-center w-full gap-5'>
                    <input className='border-white focus:outline-0 h-14 w-[40%] px-5 rounded-full border text-white' type="text" placeholder='Name' />
                    <input className='border-white focus:outline-0 h-14 w-[40%] px-5 rounded-full border text-white' type="text" placeholder='Mobile Number' />
                </div>
                 <input className='border-white focus:outline-0 h-14 w-[85%] px-5 rounded-full border text-white' type="text" placeholder='Mail ID' />
                 <input className='border-white focus:outline-0 h-[50%] w-[85%] px-5 rounded-2xl border text-white flex items-start' type="text" placeholder='Additional information' />
                 <button className="bg-amber-700 text-white rounded-full py-2 px-4">Submite Qury</button>
      </div>
    </div>
  )
}

export default Form
