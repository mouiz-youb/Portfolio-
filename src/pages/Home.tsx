// import mouiz from '../image/3azo.jpg'
import mouiz from '../image/mouiz.jpg'
// import ProjectCard from "../components/Test" 
// import ThreeDSlider from "../components/Test"
import "../index.css"
function Home() {
  return (
    <div className='w-full flex justify-center items-center border border-black flex-col '>
        {/* <p>hello</p> */}
        <img src={mouiz} alt="mouiz" className='w-[50%] h-135 rounded-b-full object-contain'/>
    </div>
  )
}

export default Home
