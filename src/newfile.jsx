import React from 'react'

function Dashboard() {
  return (
    <div className='w-full h-screen flex col-sapn-4'>
        <div className='col-span-2 flex flex-col gap-2 border border-0 border-r-2xl bg-blue-900 text-white '>
            <div className='flex items-start gap-2'>
                <h1 className='px-12 py-4 border border-r-0 border-l-0 border-t-0 w-full boeder-b-2xl font-serif text-2xl'><span>📓</span> Dashboard</h1>
            </div>
           <div className='pl-4 flex flex-col gap-4'>
            <a className='text-2xl font-serif' href=""><span>👩‍⚖️</span> Manager</a>
            <a className='text-2xl font-serif' href=""><span>👩‍🏫</span> Teacher</a>
            <a className='text-2xl font-serif' href=""><span>👨‍🎓</span> Student</a>
            <a className='text-2xl font-serif' href=""><span>👪</span> Parants</a>
           </div>
        </div>
        {/* hero */}
        <div className='col-sapn-3'></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque sed suscipit excepturi cum amet repellendus iste corporis beatae nesciunt praesentium sit ea id cupiditate nisi magni, laborum dolore ad!</p>
      
    </div>
  )
}

export default Dashboard
