import Link from 'next/link';
import React, { ReactNode } from 'react'

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
        <aside className='w-52 text-sm font-medium text-gray-400'>
            <div className='overflow-y-auto py-2 px-2 rounded justify-between'>
                <h1 className='ml-3 mb-4 uppercase'>Menu</h1>
                <ul className='space-y-2'>
                    {linkItems.map((item) => (
                        <Link className='ml-3 block mt-2 hover:text-blue-600' href={item.location}>
                            {item.name}
                        </Link>
                    ))}
                </ul>

                <div className='bg-pink-400 h-10 mt-60 rounded-md mx-3'>

                </div>
            </div>
        </aside>
    </div>
  )
}
