import { Inter } from '@next/font/google'
import Card from '../components/card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gray-100'>
      <div className='grid grid-cols-[70%_auto] h-full'>
        <div className='mx-4'>
            <Card title={'What does the fox say?'} 
            message={`Guys! So i was in the shower and it popped in my head. What does the fox say?
            Like really, how do they sound when they speak. I know about dogs`} 
            author={'Drone'} image={'#'}/>
            
            <Card title={'What does the fox say?'} 
            message={`Guys! So i was in the shower and it popped in my head. What does the fox say?
            Like really, how do they sound when they speak. I know about dogs`} 
            author={'Drone'} image={'#'}/>

            <Card title={'What does the fox say?'} 
            message={`Guys! So i was in the shower and it popped in my head. What does the fox say?
            Like really, how do they sound when they speak. I know about dogs`} 
            author={'Drone'} image={'#'}/>
            
            <Card title={'What does the fox say?'} 
            message={`Guys! So i was in the shower and it popped in my head. What does the fox say?
            Like really, how do they sound when they speak. I know about dogs`} 
            author={'Drone'} image={'#'}/>
        </div>

        {/* second grid */}
        <div className='mx-2'>
          <div className='bg-blue-500 flex justify-center mx-6 w-40 p-2 mt-4 text-xs text-white cursor-pointer'>
            <h1>+</h1>

            <h1 className='mx-2'>Start a demo</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
