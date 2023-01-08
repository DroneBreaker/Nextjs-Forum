import Link from 'next/link';
import React, { ReactNode } from 'react'
import Button from './button';

interface SidebarProps {
    name: string;
    location: string
}

const linkItems: Array<SidebarProps> = [
    {name: 'Home', location: '/'},
    {name: 'Explore Topics', location: '/topics'},
    {name: 'My Topics', location: '/my_topics'},
    {name: 'My Answers', location: '/answers'},
]

export default function Sidebar() {
  return (
    <div>
        <aside className='md:w-52 w-44 text-sm font-medium text-gray-400'>
            <div className='overflow-y-auto py-2 px-2 rounded justify-between fixed'>
                <h1 className='ml-6 mb-4 uppercase'>Menu</h1>
                <ul className='space-y-2'>
                    {linkItems.map((item) => (
                        <Link className='ml-6 block mt-2 hover:text-blue-600 active:bg-blue-300 active:p-1' href={item.location}>
                            {item.name}
                        </Link>
                    ))}
                </ul>

                <div className='bg-green-100 h-44 md:mt-52 mt-[31rem] rounded-md md:mx-3 px-3'>
                    <img className='mb-24'/>

                    <h1 className='mx-2 text-xs text-black mb-4'>New merch Available</h1>

                    <Button location='/store' title={'Go to Store'} icon={'#'}/>
                </div>
            </div>
        </aside>
    </div>
  )
}
