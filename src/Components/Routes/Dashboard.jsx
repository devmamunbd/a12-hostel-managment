import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="flex">

        {/* dashboard-sidebar */}
        <div className="w-64 min-h-screen bg-blue-600 list-none px-6 py-5 text-white">
           <ul className="p-4 space-y-4">
           <li> 
            <Link className="mb-5" to="/dashboard/myprofile">
            My Profile</Link>
           </li>
           <li> <Link className="mb-5" to="/dashboard/requestmeals">Request Meals</Link></li>
           <li> <Link className="mb-5" to="/dashboard/myreview">My Review</Link></li>
           <li> <Link className="mb-5" to="/dashboard/paymenthistory">Payment History</Link></li>
           






           <div className="divider"></div>

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