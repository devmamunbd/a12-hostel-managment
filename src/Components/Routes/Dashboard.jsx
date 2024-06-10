/* eslint-disable no-unused-vars */
import { Link, NavLink, Outlet } from "react-router-dom"
import useAdmin from "../../hooks/useAdmin/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();

  return (
    <div className="flex flex-col md:flex-row">

        {/* dashboard-sidebar */}
        <div className="w-full md:w-64 min-h-screen bg-black list-none px-6 py-5 text-white">
           <ul className="p-4 space-y-4">
            {
                isAdmin ?
                <>
                  <li> 
            <NavLink className={({isActive}) =>
            isActive ?  "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :
            "flex items-center hover:text-blue-500 transition-colors"
            } to="/dashboard/adminprofile">
            Admin Profile</NavLink>
           </li>
           <li> <NavLink 
           className={({isActive})=> 
           isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
           } to="/dashboard/manageusers">Manage Users</NavLink></li>
           <li> <NavLink 
            className={({isActive})=> 
              isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
              } to="/dashboard/addmeal">Add Meal</NavLink></li>
           <li> <NavLink 
            className={({isActive})=> 
              isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
              } to="/dashboard/allmeal">All Meal</NavLink></li>
           <li> <NavLink 
           className={({isActive})=> 
            isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
            } to="/dashboard/allriview">All Riview</NavLink></li>
           <li> <NavLink 
           className={({isActive})=> 
            isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
            } to="/dashboard/servemeal">Serve Meal</NavLink></li>
           <li> <NavLink 
            className={({isActive})=> 
              isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
              }to="/dashboard/upcomingmeals">Upcoming Meals</NavLink></li>
                </> : 
                <>
                  <li> 
            <NavLink 
             className={({isActive})=> 
              isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
              } to="/dashboard/myprofile">
            My Profile</NavLink>
           </li>
           <li> <NavLink  className={({isActive})=> 
           isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
           }
            to="/dashboard/requestmeals">Request Meals</NavLink></li>
           <li> <NavLink  className={({isActive})=> 
           isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
           }
            to="/dashboard/myreview">My Review</NavLink></li>
           <li> <NavLink  className={({isActive})=> 
           isActive ? "border-[1px] px-6 py-2 rounded-md border-green-500 text-green-500 font-bold" :"flex items-center hover:text-blue-500 transition-colors" 
           }
            to="/dashboard/paymenthistory">Payment History</NavLink></li>
                </>
            }
           






            {/* always visible */}
           <div className="divider bg-white h-1"></div>
           <li> <Link className="mb-5" to="/">Home</Link></li>
           </ul>
        </div>


         {/* dashboard-content */}
        <div className="flex-1 p-10">
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard