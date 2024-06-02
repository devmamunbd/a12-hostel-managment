import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import RootLayout from "../../RootLayout/RootLayout";
import Meals from "../Meals/Meals";
import UpcomingMeals from "../UpcomingMeals/UpcomingMeals";
import NotifyIcon from "../NotifyIcon/NotifyIcon";
import Register from "../../Shared/Register/Register";
import Login from "../../Shared/Login/Login";
import ViewDetails from "../ViewDetails/ViewDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "./Dashboard";
import MyProfile from "../Dashboard/MyProfile/MyProfile";
import RequestMeals from "../Dashboard/RequestMeals/RequestMeals";
import MyRiview from "../Dashboard/MyReview/MyRiview";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";


export const router = new createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [

        //user dashboard
        {
          path: 'myprofile',
          element: <MyProfile></MyProfile>
        }, 
        {
          path: 'requestmeals', 
          element: <RequestMeals></RequestMeals>
        }, 
        {
          path: 'myreview',
          element: <MyRiview></MyRiview>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        },


        //admin dashboard
      ]
    }
])