/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../../hooks/useAdmin/useAdmin"
import useAuth from "../../hooks/useAuth/useAuth"

const AdminRoutes = ({children}) => {
  
    const {user, loading} = useAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return  <span className="loading loading-spinner loading-lg"></span>
    }
    if (isAdmin && user) {
      return children
    }


  return <Navigate state={{from: location}} to='/login' replace></Navigate>
}

export default AdminRoutes