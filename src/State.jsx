import React, { useState } from 'react'

function State() {
    const [value,setvalue] = useState (0);
  return (
    <div className='w-full flex items-center justify-center p-12'>
      <h1>The nimber  is {value}</h1>
      <button onClick={()=>{ setvalue (value + 1) }}>incremant</button>
      <button onClick={()=>{ setvalue (value- 1) }}>Decremant</button>
    </div>
  )
}

export default State
