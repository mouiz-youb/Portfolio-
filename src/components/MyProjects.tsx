
import MyProjectCart from "./MyProjectCart";
import { FaFolder } from "react-icons/fa";

import "../index.css"
function MyProjects() {
    const projectCartData =[
        {
            id:1 ,
            projectName:"E-Commerce Platform",
            projectDesc :"Full-stack e-commerce solution with real-time inventory, payment integration, and recommendation engine.",
            // imgSrc :bg ,
            githubRepoLink:"",
            websiteLink:"" ,
            technologies :["expressJs" , "reactTs"]
        },
        {
            id:2 ,
            projectName:"E-Commerce Platform",
            projectDesc :"Full-stack e-commerce solution with real-time inventory, payment integration, and recommendation engine.",
            // imgSrc :bg ,
            githubRepoLink:"",
            websiteLink:"" ,
            technologies :["expressJs" , "reactTs"] 
        },
        {
            id:3 ,
            projectName:"E-Commerce Platform",
            projectDesc :"Full-stack e-commerce solution with real-time inventory, payment integration, and recommendation engine.",
            // imgSrc :bg ,
            githubRepoLink:"",
            websiteLink:"" ,
            technologies :["expressJs" , "reactTs"] 
        },
        {
            id:4 ,
            projectName:"E-Commerce Platform",
            projectDesc :"Full-stack e-commerce solution with real-time inventory, payment integration, and recommendation engine.",
            // imgSrc :bg ,
            githubRepoLink:"",
            websiteLink:"" ,
            technologies :["expressJs" , "reactTs"] 
        },
    ]
  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 p-3 bg-[#0A1739]  ">
        <div className="w-1/2 md:w-1/10   text-xs flex justify-center items-center flex-row gap-2 border border-sky-300 p-2 text-sky-400 rounded-2xl cursor-pointer shadow-btn transition duration-300">
            <FaFolder className=" text-2xl" />
            <p className="  font-bold">PortFolio</p>
        </div>
        <header className="w-full text-3xl md:text-6xl font-serif italic gap-2 flex justify-center items-center text-white ">
            Featured <span className="text-sky-300">Projects</span>
        </header>
        <div className="w-full flex justify-center items-center text-center text-slate-400">
            <p>A selection of my most impactful work in web development </p>
        </div>
        {/* caroucel  */}
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6 md:p-5 ">
            {projectCartData.map((exp) => (
                <MyProjectCart key={exp.id} {...exp} />
            ))}
        </div>
    </div>
  )
}

export default MyProjects
