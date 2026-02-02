import { FaAward } from "react-icons/fa";
function MyServices() {
  return (
    <div className="w-full flex  justify-center items-center flex-col gap-5 p-5 bg-[#0A1739]   ">
      <div className="w-1/2 md:w-1/10   text-xs flex justify-center items-center flex-row gap-2 border border-sky-300 p-2 text-sky-400 rounded-2xl cursor-pointer shadow-btn transition duration-300">
              <FaAward className=" text-2xl" />
              <p className="  font-bold">Leadership</p>
      </div>
    </div>
  )
}

export default MyServices
