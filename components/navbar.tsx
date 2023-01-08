import React, { ReactNode } from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='flex m-3 md:mx-24 mx-8 justify-between'>
            <h1 className='font-bold mt-1'>
                foru
                <span className='text-blue-500 font-bold mt-1'>
                    me
                </span>
            </h1>

            <input placeholder='Search for Topics' className='bg-gray-300 mx-16 w-[19rem] p-1 text-sm px-4 h-8 rounded-md'/>

            <div className='h-7 w-7 rounded-full bg-slate-600 mt-1'></div>
        </nav>
    </div>
  )
}
