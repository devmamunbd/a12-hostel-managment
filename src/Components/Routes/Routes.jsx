import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import RootLayout from "../../RootLayout/RootLayout";
import Meals from "../Meals/Meals";
import UpcomingMeals from "../UpcomingMeals/UpcomingMeals";
import NotifyIcon from "../NotifyIcon/NotifyIcon";
import JoinUS from "../JoinUS/JoinUS";
import Register from "../../Shared/Register/Register";
import Login from "../../Shared/Login/Login";
import ViewDetails from "../ViewDetails/ViewDetails";


export const router = new createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [ 
        {
            path: '/',
            element: <Home></Home>
        },
       {
        path: '/meals',
        element: <Meals></Meals>
       },
       {
        path: '/umeals',
        element: <UpcomingMeals></UpcomingMeals>
       },
       {
        path: '/nicon',
        element: <NotifyIcon></NotifyIcon>
       },
       {
        path: '/joinus',
        element: <JoinUS></JoinUS>
       },
       {
        path: '/register',
        element: <Register></Register>
       }, {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/details/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params})=> fetch(`http://localhost:1000/details/${params.id}`)
       }
      ]
    }
])