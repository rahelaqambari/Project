import React from 'react'

function Dashboard() {
  return (
    <div className='w-full flex col-sapn-4'>
        <div className='col-span-1 flex flex-col gap-2'>\
            <div>
                <h1 className='p-4 border boeder-b-2xl font-serif text-2xl'>Dashboard</h1>
            </div>
            <a href="">Manager</a>
            <a href="">Teacher</a>
            <a href="">Student</a>
            <a href="">Parants</a>
        </div>
        {/* hero */}
        <div className='col-sapn-3'></div>
      
    </div>
  )
}

export default Dashboard
