import "../index.css"
import { AiOutlineMenuFold } from "react-icons/ai";
import { TbPointFilled } from "react-icons/tb";
function Navbar() {
  return (
    
    <nav className="w-full flex justify-between px-5  font-sans  py-7.5  glass-dark items-center flex-row h-10 fixed top-0 left-0 z-30 ">
      <div className="flex justify-center items-end flex-row text-3xl font-bold  text-sky-300">
        <TbPointFilled size={25} />
        <h1>AbdelMouiz</h1>
      </div>
      <div className="flex justify-center items-center flex-row gap-3 cursor-pointer bg-white/25 text-sky-300  px-3 py-1 rounded-2xl ">
        <h1>Menu</h1>
        <AiOutlineMenuFold size={25} />
      </div>
      
    </nav>
  )
}

export default Navbar
//   glass-dark










