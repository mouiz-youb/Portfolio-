import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div className='realtive w-screen flex  flex-col gap-3 relative '>
        <Navbar/>
        <main className=' w-full   flex justify-center overflow-y-scroll items-center  border   '>
            <Outlet/>
        </main>
    </div>
  )
}

export default MainLayout











