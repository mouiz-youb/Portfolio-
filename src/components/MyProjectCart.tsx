import { Link } from "react-router-dom"
import { FaAward } from "react-icons/fa";
interface MyProjectProps {
    projectName :string 
    projectDesc :string 
    imgSrc ?:string
    technologies?:[]
    githubRepoLink:string
    websiteLink:string
}

const  MyProjectCart:React.FC<MyProjectProps>=({projectDesc , projectName , imgSrc , technologies , githubRepoLink , websiteLink}) =>{
  return (
    <div className=" group  hover:scale-105 transition-transform duration-500 hover:shadow-project flex h-[75vh] justify-center items-center flex-col border border-sky-300 m-3 md:m-5 rounded-2xl ">
        <div className="w-full h-1/2 flex justify-center items-center glass-card 0 rounded-tl-2xl rounded-rl-2xl overflow-hidden">
            {/* <img src={imgSrc} alt=""  className="w-full object-cover "/> */}
        </div>
        <div className="w-full flex  h-1/2   justify-start items-center flex-col gap-2  md:gap-5 px-5 py-5">
            <div className="w-full flex justify-between items-center flex-row  ">
                <p className="text-white md:text-3xl group-hover:text-sky-400 transition-colors "> {projectName} </p>
                <div className="flex justify-center items-center flex-row gap-3 ">
                    <LinkIcon icon ={<FaAward />} link ={githubRepoLink}/>
                    <LinkIcon icon ={<FaAward />} link ={websiteLink}/>
                </div>
            </div>
            <p className="text-slate-500 text-xs md:text-[15px]"> {projectDesc} </p>
            <div className="w-full flex justify-start items-center flex-row gap-3 ">
                {technologies.map((exp) => (
                    <p className="px-3 py-1 rounded-full bg-navy-900 text-sky-400 text-xs border border-sky-400/20">
                        {exp}
                    </p>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default MyProjectCart
interface LinkIconProps {
    icon :React.ReactNode
    link :string 
}
const LinkIcon:React.FC<LinkIconProps> =({icon , link })=>{
    return (
        <Link to={link} className="p-2 text-sky-500 rounded-md bg-sky-400/10 hover:bg-sky-400 hover:text-white transition-all">
            {icon}
        </Link >
    )
}

// px-3 py-1 rounded-full bg-navy-900 text-sky-400 text-xs border border-sky-400/20