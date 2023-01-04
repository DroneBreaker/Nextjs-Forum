import React from 'react'

interface CardProps {
    title: string
    message: string
    author: string
    image: string;
    date?: Date;
}

export default function Card(props:CardProps) {
  return (
    <div>
        <div className='mt-4 mx-6 max-w-md bg-white rounded-md'>
            <h1 className='text-sm font-bold mx-10 mt-6'>{props.title}</h1>

            <p className='text-xs font-medium text-gray-300 mx-10 mb-3'>{props.message}</p>

            <hr className='mx-10'/>

            <div>
                <div className='flex mx-10 mt-2 mb-4'>
                    <img src={props.image} className='rounded-full h-4 w-5'/>

                    <p className='mx-2 text-blue-700 text-sm font-bold mb-2'><span className='text-gray-300 text-sm font-medium'>Posted by </span>{props.author}</p>
                </div>

                <div></div> 
            </div>

        </div>
    </div>
  )
}
