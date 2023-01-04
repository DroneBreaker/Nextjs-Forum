import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Navbar/>
        <div className='flex'>
          <Sidebar/>
          {children}
        </div>
        
      </body>
    </html>
  )
}
