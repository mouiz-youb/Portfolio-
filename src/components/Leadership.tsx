import { FaAward } from "react-icons/fa";
import LeaderShipCart from "./LeaderShipCart";
import bg from "../image/bg2.png"
function Leadership() {
const leadershipExperience = [
  {
    id: 1,
    positionName: "President", // Matches positionName
    clubName: "Scientific Club Z", // Matches clubName
    data: "2023 - Present", // Matches data
    imgSrc: bg, // Matches imgSrc
    desc: "Strategic leadership and vision direction for the entire club. Managed executive board, secured partnerships with tech companies, and organized the annual university hackathon with 300+ participants.", // Matches desc
    shortRole: "PR", 
    accent: "text-sky-300"
  },
  {
    id: 2,
    positionName: "Development Manager",
    clubName: "Scientific Club Y",
    data: "2022 - 2023",
    imgSrc: bg,
    desc: "Led technical projects and managed developer teams across multiple domains. Supervised the development of 5 major projects, conducted code reviews, and established workflows.",
    shortRole: "DM",
    accent: "text-sky-400"
  },
  {
    id: 3,
    positionName: "Human Resources Lead",
    clubName: "Scientific Club X",
    data: "2021 - 2022",
    imgSrc:bg ,
    desc: "Managed team dynamics, recruitment, and member engagement for over 50 active members. Organized workshops and coordinated team-building activities.",
    shortRole: "RH",
    accent: "text-sky-500"
  }
];
  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 p-5 bg-[#0A1739]   ">
      {/* btn  */}
      <div className="w-1/2 md:w-1/10   text-xs flex justify-center items-center flex-row gap-2 border border-sky-300 p-2 text-sky-400 rounded-2xl cursor-pointer shadow-btn transition duration-300">
        <FaAward className=" text-2xl" />
        <p className="  font-bold">Leadership</p>
      </div>
      {/* header */}
      <header className="w-full text-3xl md:text-6xl font-serif italic gap-2 flex justify-center items-center text-white ">
        Scientific Club <span className="text-sky-300">Experience</span>
      </header>
      {/* subtitle  */}
      <div className="w-full flex justify-center items-center text-center text-slate-400">
        <p>Leading innovation through community building and technical excellence</p>
      </div>
      {/* cart  */}
      <div className="w-full flex justify-center items-center flex-col gap-5 md:p-5">
        {leadershipExperience.map((exp) => (
          <LeaderShipCart key={exp.id} {...exp} />
        ))}
      </div>
    </div>
  )
}

export default Leadership
