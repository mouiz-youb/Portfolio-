import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { DiSqllite } from "react-icons/di";
import { SiMongodb, SiNextdotjs, SiGithubactions } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";

const icons = [
  <BsGithub />, <BiLogoPostgresql />, <FaReact />, <BiLogoTailwindCss />, 
  <DiSqllite />, <SiMongodb />, <TbBrandPrisma />, <SiNextdotjs />, 
  <FaJava />,  <BiLogoTypescript />, <FaHtml5 />, 
  <FaCss3Alt />, <SiGithubactions />, <FaNodeJs />
];

function Technologies() {
  return (
    <div className="w-full bg-slate-900 py-10 overflow-hidden relative">
      {/* Label Section */}
      <div className="flex justify-center mb-8">
        <p className="text-xl font-bold text-white uppercase tracking-widest border-b-2 border-sky-500 pb-1">
          Technologies I can work with
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div 
          className="flex flex-none gap-12 pr-12"
          animate={{ x: ["0%", "-50%"] }} // Moves half-way because we duplicated the list
          transition={{ 
            duration: 25, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* We render the icons twice to create a seamless loop */}
          {[...icons, ...icons].map((icon, index) => (
            <div 
              key={index} 
              className="text-6xl text-slate-400 hover:text-sky-400 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;