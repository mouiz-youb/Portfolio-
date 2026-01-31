import { Routes, Route } from 'react-router-dom'

import AboutMe from './pages/AboutMe.tsx'
import Home from './pages/Home.tsx'
import MyProject from './pages/MyProject.tsx'
import MainLayout from './layout/MainLayout.tsx'
import Preloader from "./Animations/Preload.tsx"
import "./App.css"
function App() {
  return (
    // <Preloader>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/myprojects" element={<MyProject/>}/>
      </Route>
    </Routes>
    // </Preloader>

  )
}

export default App
