/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth"

const Navbar = () => {
    const {user, logOut} = useAuth()

    const navlinks = <>
    <Link to="/"> <li><a>Home</a></li> </Link>
       <Link to="/meals"> <li><a>Meals</a></li> </Link>
       <Link to="/umeals"> <li><a>Upcoming Meals</a></li> </Link>
       <Link to="/nicon"> <li><a>Notify Icon</a></li> </Link>
       {/* <Link to="/joinus"> <li><a>Join Us</a></li> </Link> */}
       <Link to="/register"> <li><a>Join Us</a></li> </Link>
       <Link to="/login"> <li><a>Login</a></li> </Link>
    </>

    const handleLogOut=()=> {
      logOut()
    }
    

  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
       {navlinks}

      </ul>
    </div>
   <div className="">
    <Link to="/"> <img className="w-32 h-32" src="https://i.postimg.cc/Bb9rCQSm/images-2-removebg-preview.png" alt="" /></Link>
   {/* <Link to="/"> <a className="text-2xl font-bold">Smart <span className="text-blue-500">Hostel</span></a></Link> */}
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user ? <div className="dropdown dropdown-end">
    <div tabIndex={0} className="cursor-pointer m-1">
      <img className="w-10 h-10 rounded-full" src={user?.photoURL ? user?.photoURL : "https://i.postimg.cc/kMKbZJFt/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu-Zw.webp"} alt="" />
    </div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
     <div className="flex flex-col justify-center items-center font-semibold text-black">
     <h1>{user?.displayName ? user?.displayName : "UserName"}</h1>
       <Link to="/dashboard/myprofile"><li><a>Dashboard</a></li></Link>
      <button onClick={handleLogOut} className="">LogOut</button>
     </div>
    </ul>
  </div> :
  <div>
    <img className="w-10 h-10 rounded-full" src="https://i.postimg.cc/kMKbZJFt/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu-Zw.webp" alt="" />
  </div>
  }
 
  </div>
</div>
    </div>
  )
}

export default Navbar