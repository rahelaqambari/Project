import React, { useState } from 'react'

function NewPage() {
    const [time,settime] = useState(new Date().toLocaleTimeString());
  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}

export default NewPage