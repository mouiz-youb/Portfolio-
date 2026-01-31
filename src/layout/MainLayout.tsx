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











import mouiz from '../image/mouiz.jpg'
import "../index.css"

function Home() {
  return (
    // The Background: Gradient from Dark Blue to Sky Blue
    <div className="min-h-screen w-full flex justify-center items-center bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] p-4">
      
      {/* The Glass Card */}
      <div className="relative flex flex-col items-center justify-center 
                      bg-white/10 backdrop-blur-xl 
                      border border-white/20 rounded-3xl 
                      shadow-2xl shadow-black/50
                      p-8 md:p-12 max-w-2xl w-full">
        
        {/* The Image with a subtle glow */}
        <div className="relative">
            <div className="absolute -inset-1 bg-sky-400/30 blur-2xl rounded-full"></div>
            <img 
              src={mouiz} 
              alt="mouiz" 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10"
            />
        </div>

        <h1 className="mt-6 text-white font-brand text-3xl font-bold tracking-tight">
          Mouiz
        </h1>
        <p className="text-sky-200/80 font-medium">Digital Designer</p>
        
      </div>
    </div>
  )
}

// expo Home