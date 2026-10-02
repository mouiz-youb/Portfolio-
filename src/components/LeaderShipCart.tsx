interface LeaderShipCartProps {
    positionName :string 
    clubName :string 
    data :string
    imgSrc :string
    desc :string
}

const  LeaderShipCart: React.FC<LeaderShipCartProps> = ({ positionName, clubName, data, imgSrc, desc }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col md:flex-row border border-sky-50 rounded-2xl py-3 px-2 md:py-5 md:px-3 text-white  gap-5 ">
       <div className="flex justify-center items-center w-33 h-24 rounded-2xl overflow-hidden  ">
            <img src={imgSrc} alt={positionName} className=" w-full h-full bg-[#193355]  object-contain" />
       </div>
       <div className=" w-full flex justify-center items-center md:justify-start md:items-start flex-col px-3 text-center md:text-start  gap-3 md:gap-4   ">
            <p> {positionName} </p>
            <p className="text-sky-300 text-2xl md:text-3xl font-serif"> {clubName} </p>
            <p className="text-xs text-slate-300 text-center md: w-2/3 md:text-start">{desc}</p>
       </div>
       <div className=" w-2/10 flex justify-center items-start  md:h-44   underline text-sky-400 ">
            <p className="w-full ">{data}</p>
       </div>
    </div>
  )
}

export default LeaderShipCart
