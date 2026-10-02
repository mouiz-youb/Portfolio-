// import mouiz from '../image/3azo.jpg'
import mouiz from '../image/mouiz.jpg'


import {motion} from 'framer-motion'
import "../index.css"
      {/* description one  */}
function Hero() { 

  return (
   
    <div className="relative flex flex-col md:flex-row items-center justify-center  h-screen  w-full bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] ">
      
      {/* Description One: Order 2 on mobile, Order 1 on Desktop */}
      <div className="order-2 md:order-1 h-full flex justify-center items-start px-3 flex-col gap-5 capitalize   md:w-2/7">
        <p className='text-2xl font-serif text-sky-300'>Hey. I'm Abdelmouiz,</p>
        <div className=' w-full flex justify-center flex-col items-start gap-1 '>
          <p className=' text-6xl font-serif font-semibold italic text-white'>A full stack </p>
          <p className='font-italic italic text-6xl font-medium text-sky-200'>developer & </p>
          <p className=' text-6xl font-serif font-semibold italic text-white'>Ai engineer .</p>
          {/* <p className=' text-7xl font-serif font-semibold italic'>engineer </p> */}
        </div>
        <p className='text-[15px] text-slate-300 border-l-2 border-sky-400/50 pl-4'>
          "Evolving concepts into powerful platforms—seamless Full Stack ecosystems and AI-driven intelligence that connects, learns, and delivers excellence."
        </p>
      </div>

      {/* Image: Order 1 on mobile, Order 2 on Desktop */}
      <div className="relative w-full order-1 md:order-2 h-full flex justify-center items-center z-20    md:w-3/7">
        <motion.div 
            className=' absolute top-20 w-7/10 border h-8/10 rounded-b-full flex justify-center items-center overflow-hidden transition-all duration-500 ease-in-out shadow-profile hover:shadow-profile-mouiz hover:-translate-y-2 '>
          <img src={mouiz} alt="" className='object-cover transition-transform duration-700 w-full h-full object-top' />
        </motion.div>
      </div>
     
      {/* Description Two: Order 3 on both, but hidden on Mobile */}
      <div className="order-3 grid grid-cols-2 h-full gap-10 p-16 md:flex md:justify-center md:items-center md:flex-col md:gap-5 w-full md:w-2/7">
        <Stat value="10+" label="Projects Completed" />
        <Stat value="5M+" label="Lines of Code" />
        <Stat value="3" label="Years of Experience" />
        <Stat value="3" label="Projects Completed"/>
      </div>
    </div>
  )
}

export default Hero

const Stat = ({ value, label }: { value: string, label: string }) => {
  return (
    <div className='group flex flex-col justify-center items-center md:w-1/2 md:h-1/6 p-6 cursor-pointer
                    bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl 
                    hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300'>
      <h1 className='text-4xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform'>
        {value}
      </h1>
      <p className='text-[10px] uppercase tracking-[0.2em] text-sky-300/80 font-bold mt-2 text-center'>
        {label}
      </p>
    </div>
  )
}