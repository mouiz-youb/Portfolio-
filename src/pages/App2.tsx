// import { Routes , Route , Navigate  } from 'react-router-dom'
// import MainLayout from './Components/Layout/MainLayout'
// import "./App.css"

// // Import React FilePond
// //import { FilePond, registerPlugin } from 'react-filepond'

// // Import FilePond styles
// import 'filepond/dist/filepond.min.css'

// // Import the Image EXIF Orientation and Image Preview plugins
// // Note: These need to be installed separately
// // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
// // import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// // import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// // import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// // Register the plugins
// // registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

// import AdminPage from './Pages/AdminPage'
// import Settings from './Pages/Settings'
// //mport Profile from './Pages/Profile'
// import Boutique from './Pages/Boutique'
// //import ProductPage from './Pages/ProductPage'
// import TestPage from './Pages/TestPage'
// //import TestPage2 from './Pages/TestPage2'
// import Profile2 from './Pages/Profile2'
// import SignupPage from './Pages/SignupPage'
// import LoginPage from './Pages/LoginPage'
// //import { useGetMyData } from './Hooks/useGetMyData'; // The "Logic"
// //import { useUserData } from './Store/useUserStore';   // The "State"
// import CreateBoutiquePage from './Pages/CreateBoutiquePage'
// import AuthInitializer from './auth/AuthInitializer';
// import ProtectedRouter from './auth/ProtectedRouter';
// import CreateProductPage from './Pages/CreateProductPage';
// import Clientpage from './Pages/Clientpage'
// import TestPage2 from './Pages/TestPage2';
// import AntiWasteDashboard from './Pages/Antiwaste';
// // import Test from './Components/Test'
// function App() {
//   // const { fetchMyData } = useGetMyData();
//   // useEffect(() => {
//   //   fetchMyData();
//   // }, [fetchMyData]);
//   // const user = useUserData((state)=>state.user)
  
//   return (
//    <>
//       <AuthInitializer />
//     <Routes>
//           <Route path="/" element={<Navigate to="/signup" replace />} />
//       <Route element={<MainLayout/>}
//       >
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//       </Route>
//         {/* Layout Route Pattern: 
//            The Layout is the parent route. Everything inside renders 
//            WHERE the <Outlet /> is placed in the Layout component.
//         */}
//         <Route element={<MainLayout />}>
//           {/* PRODUCTUER ROUTER  */}
//           <Route path="/dashboard" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <AdminPage />
//               </ProtectedRouter>} 
//           />
//           <Route path="/settings" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <Settings />
//               </ProtectedRouter>} 
//           />
//           <Route path="/client" element={
//               <ProtectedRouter allowedRoles={['CLIENT']}>
//                 <Clientpage />
//               </ProtectedRouter>} 
//           />
//           <Route path="/boutique" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <Boutique />
//               </ProtectedRouter>} 
//           />
//           <Route path="/antiGaspiage" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <AntiWasteDashboard />
//               </ProtectedRouter>} 
//           />
//           <Route path="/profile" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <Profile2 />
//               </ProtectedRouter>} 
//           />
//           <Route path="/product" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <TestPage />
//               </ProtectedRouter>} 
//           />
//           <Route path="/createboutique" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <CreateBoutiquePage />
//               </ProtectedRouter>} 
//           />
//           <Route path="/createproduct" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <CreateProductPage />
//               </ProtectedRouter>} 
//           />
//           <Route path="/test" element={
//               <ProtectedRouter allowedRoles={['PRODUCTEUR']}>
//                 <TestPage2 />
//               </ProtectedRouter>} 
//           />
//           {/* <Route path="/settings" element={<Settings />} />
//           <Route path="/profile" element={<Profile2 />} />
//           <Route path="/boutique" element={<Boutique />} />
//           <Route path="/createboutique" element={<CreateBoutiquePage />} />
//           <Route path="/product" element={<TestPage />} /> */}
//           {/* <Route element={<ProtectedRouter allowedRoles={['PRODUCTEUR']} />}>
//             <Route path="/" element={<AdminPage />} />
//             <Route path="/createboutique" element={<CreateBoutiquePage />} />
//           </Route> */}
//           {/*Auth  page public router    */}

//         </Route>
        
//         {/* You can add other layouts here! 
//            e.g. <Route element={<AuthLayout />}> for login pages 
//         */}
//       </Routes>
//    </>
//   )
// }

// export default App
