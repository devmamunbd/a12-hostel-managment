/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth/useAuth"

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if (loading) {
        return <h1>Loading</h1>
    }

    if (user) {
        return children
    }


  return <NavLink state={location.pathname} to="/login" replace></NavLink>
}

export default PrivateRoutes