// import Hero from '../components/Hero'
import MyServices from '../components/MyServices'
import Technologies from '../components/Technologies'
import Hero2 from '../components/Hero2'
import Leadership from '../components/Leadership'

import MyProjects from '../components/MyProjects'
import MyContacts from '../components/MyContacts'

function Home() {
  return (
    <div className='w-full  flex justify-center items-center flex-col '>
      {/* <Hero /> */}
      <Hero2/>
      <Technologies/>
      <Leadership/>
      <MyProjects/>
      <MyContacts/>
      {/* <MyServices /> */}
    </div>
  )
}

export default Home
