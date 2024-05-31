import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import Footer from "../Shared/Footer/Footer"

const RootLayout = () => {
  return (
    <div>
         <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
    <div className="mt-10">
    <Footer/>
    </div>
    </div>
   
  )
}

export default RootLayout