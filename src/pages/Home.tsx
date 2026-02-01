import Hero from '../components/Hero'
import MyServices from '../components/MyServices'
import Technologies from '../components/Technologies'
import Hero2 from '../components/Hero2'

function Home() {
  return (
    <div className='w-full  flex justify-center itms-center flex-col '>
      {/* <Hero /> */}
      <Hero2/>
      <Technologies/>
      <MyServices />
    </div>
  )
}

export default Home
