import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    title: string
    icon: string
    location: string
}

export default function Button(props: ButtonProps) {
  return (
    <button className='p-1 px-3 mt-4 mx-2 bg-green-500 flex'>
        {props.icon}
        <Link href={props.location} className='text-white text-xs'>{props.title}</Link>
    </button>
  )
}
