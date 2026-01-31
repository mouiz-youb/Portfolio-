import Hero from '../components/Hero'
import MyServices from '../components/MyServices'
import Technologies from '../components/Technologies'

function Home() {
  return (
    <div className='w-full  flex justify-center itms-center flex-col '>
      <Hero />
      <Technologies/>
         <MyServices />
    </div>
  )
}

export default Home
