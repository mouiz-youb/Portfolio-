import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className='w-screen flex justify-center items-center flex-col gap-3 relative '>
        <Navbar/>
        <main className=' w-full  flex justify-center items-center mt-12 md:mt-0 '>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout











