import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className='w-screen flex justify-center items-center flex-col gap-3 relative'>
        <Navbar/>
        <main className=' w-full screen flex justify-center items-center   mt-10'>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout
