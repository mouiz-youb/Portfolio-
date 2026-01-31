// import { Outlet, useLocation } from "react-router-dom"

// // import SideBar from "../SideBar"
// // import Navbar from "../Navbar"
// // import { useClick } from "@/Store/useClick"
// // import { useChangeMode } from "@/Store/useChangeMode"
// import  "../../index.css"
// // import SideBarTest from "../SidebarTest"
// function MainLayout() {
//     const location = useLocation()
//     const isAuthPage = ["/login" ,"/signup" , "/createboutique" , '/createproduct'].includes(location.pathname)
//     // const changemode = useChangeMode((state)=>state.changemode)
//     // const click = useClick((state)=>state.click)
//     // console.log(changemode)
//     const getMainContentClasses = () => {
//     // If it's Login/Signup, use full width and center content
//     if (isAuthPage) {
//       return `row-start-1 row-end-2 col-start-1 col-end-5 md:col-start-1 md:col-end-7 flex justify-center items-center flex-col  gap-5  `
//     }

//     // Normal behavior (your existing logic)
//     return !click
//       ? `row-start-1 row-end-2 col-start-1 col-end-5 md:col-start-2 md:col-end-7 flex justify-center items-center flex-col p-2 gap-5`
//       : `row-start-1 row-end-2 col-start-1 col-end-5 md:col-start-1 md:col-end-7 flex justify-center items-center flex-col p-2 gap-5`
//   }
//   return (
//     <div className={`w-screen  gap-2 h-screen grid grid-cols-4 grid-rows-1 md:grid-cols-6   ${changemode ?`dark`:null}  dark:bg-black transition-colors duration-300 `}>
//       {/* <SideBar/> */}
//       {!isAuthPage && <SideBarTest />}
//       <div className={getMainContentClasses()}>
//           {!isAuthPage && <Navbar />}
//         {/* <Navbar/> */}
//         <main className="w-full h-full overflow-y-auto scrollbar-hide p-3">
//           <Outlet/>
//         </main>
//       </div>
//     </div>
//   )
// }

// export default MainLayout
// // w-screen h-screen grid grid-cols-1 col-rows-1 md:grid-cols-10 md:grid-rows-1 gap-2 border-2 border-black overflow-hidden
// // md:col-start-3 md:col-end-11 md:row-start-1 md:row-end-2 
// // col-start-1 col-end-2 row-start-1 row-end-2



//     //  <div className='w-screen h-screen flex justify-start items-center flex-col md:grid md:grid-cols-10 md:grid-rows-1 overflow-hidden  '>
//     //   {/* layout   sidebar       */}
//     //   <SideBar/>
//     //   {/* the click must be there  */}
//     //   <div className='w-full h-full   flex justify-start items-center flex-col md:col-start-3 md:col-end-11 md:row-start-1 md:row-end-2   md:grid md:grid-cols-1 md:grid-rows-10  '>
//     //     {/* navbar  */}
//     //     <Navbar/>
//     //     <main className='h-full border-2 border-black flex justify-center items-center flex-col  md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-11   overflow-y-scroll '>
//     //       {/* Pages content  */}
//     //       {/* <Routes>
//     //         <Route path ="/" element={<AdminPage/>}/>
//     //       </Routes> */}
//     //       <Outlet/>
//     //     </main>
//     //   </div>
//     // </div>