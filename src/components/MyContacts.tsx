
import { TbPointFilled } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
function MyContacts() {
    const contactdata=[
        {
            id:1, 
            icon :<MdOutlineEmail className="text-xl text-sky-500"/>,
            contactLink :"a_youb@estin.dz",
            contactName:"Email"
        },
        {
            id:2, 
            icon :<FaLinkedinIn className="text-xl text-sky-500"/>,
            contactLink :"/in/abdelmouiz",
            contactName:"linkdin"
        },
        {
            id:3, 
            icon :<FiGithub className="text-xl text-sky-500"/>,
            contactLink :"@mouiz-youb",
            contactName:"github"
        },
        {
            id:4, 
            icon :<FaInstagram className="text-xl text-sky-500"/>,
            contactLink :"mustapha_mouiz-y",
            contactName:"instagram"
        },
    ]
  return (
    <div className="w-full flex justify-center items-center flex-col  gap-5 p-5 bg-[#0A1739]">
      <header className="w-full text-4xl md:text-6xl font-serif italic gap-2 flex justify-center items-center text-white ">
        Let's  <span className="text-sky-300">Connect</span>
      </header>
      {/* subtitle  */}
      <div className="w-full flex justify-center items-center text-center text-slate-400">
        <p className="text-lg">Ready to bring your ideas to life? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
      </div>
      <div className="w-full grid grid-cols-1 gap-5  px-3 py-5  md:grid-cols-4">
        {contactdata.map((exp) => (
          < Contact key={exp.id} {...exp} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-4  ">
         <div className="flex justify-center items-end flex-row text-3xl font-bold  text-sky-300">
            <TbPointFilled size={25} />
            <h1>AbdelMouiz</h1>
        </div>
        <p className="text-slate-400 text-xs md:text-sm"> © 2026 AbdelMouiz. All rights reserved. Crafted with passion.</p>
      </div>
    </div>
  )
}

export default MyContacts


interface contactProps{
    icon :React.ReactNode , 
    contactLink:string ,
    contactName :string 
}
const Contact:React.FC<contactProps> =({icon , contactLink , contactName})=>{
    return(
        <div className="w-full flex  gap-4  justify-center items-center  rounded-2xl  flex-col border  py-5 group  hover:scale-105 transition-transform duration-500 hover:shadow-contact cursor-pointer px-3 bg-[#0F1A2D] ">
            <div className="bg-[#193355] text-sky-500/10 group-hover:bg-[#173B56] w-12 h-12 flex justify-center items-center   rounded-full">
                {icon }
            </div>
            <div className="w-full flex justify-center items-center flex-col gap-1 ">
                <p className=" text-white font-serif "> {contactName} </p>
                <p className="text-sm text-sky-400"> {contactLink} </p>
            </div>
        </div>
    )
}