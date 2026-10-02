import mouiz from '../image/mouiz.jpg'
function Hero2() {
  return (
    <div className=" w-full min-h-screen md:h-screen    flex justify-center items-center flex-col md:flex-row gap-3 bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] md:pt-16">
        {/* desc one  */}
        <div className='order-2 w-full h-full md:h-full md:w-2/7   md:order-1 text-white flex justify-center md:justify-center px-5 py-6 items-center flex-col gap-3 md:px-3'>
             <p className='text-2xl font-serif text-sky-300 w-full flex justify-center items-center '>Hey. I'm Abdelmouiz,</p>
             <div className=' w-full flex justify-center flex-col items-center gap-1 '>
                <p className='text-6xl   font-serif font-extralight italic text-white'>A full stack </p>
                <p className='text-6xl font-italic italic  font-medium text-sky-200'>developer & </p>
                <p className='text-6xl   font-serif font-semibold italic text-white'>Ai engineer .</p>
             </div>
             <p className='text-[15px] text-slate-300 border-l-2 border-sky-400/50 pl-4'>
          "Evolving concepts into powerful platforms—seamless Full Stack ecosystems and AI-driven intelligence that connects, learns, and delivers excellence."
             </p>
        </div>
        {/* image  */}
        <div className='realtive order-1 w-full h-full mt-17 md:mt-0  md:h-full md:w-3/7  flex justify-center items-start  text-white md:order-2'> 
            <div className= ' w-1/2 h-1/2 md:w-7/10  md:h-9/10 rounded-b-full flex justify-center items-center overflow-hidden transition-all duration-500 ease-in-out shadow-profile hover:shadow-profile-mouiz hover:-translate-y-2  '>
                <img src={mouiz} alt="Mouiz" className='w-full h-full  object-cover object-top'/>
            </div>
        </div>
        {/* desc two */}
        <div className='order-2 w-full h-full md:h-full md:w-2/7  text-white md:order-3 grid grid-cols-2 gap-10 p-5 md:flex md:justify-center md:items-center md:flex-col md:gap-5 '>
            <Stat value="10+" label="Projects Completed" />
            <Stat value="5M+" label="Lines of Code" />
            <Stat value="3" label="Years of Experience" />
            <Stat value="3" label="Projects Completed"/>
        </div>
    </div>
  )
}

export default Hero2


const Stat = ({ value, label }: { value: string, label: string }) => {
  return (
    <div className='group flex flex-col justify-center items-center md:w-full md:h-1/4 p-6 cursor-pointer
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