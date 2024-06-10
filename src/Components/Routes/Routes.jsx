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
import PrivateRoutes from './PrivateRoutes';
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import ManageUser from './../Dashboard/ManageUser/ManageUser';
import AddMeal from "../Dashboard/AddMeal/AddMeal";
import AllMeal from "../Dashboard/AllMeal/AllMeal";
import AllRiview from "../Dashboard/AllRiview/AllRiview";
import ServeMeal from "../Dashboard/ServeMeal/ServeMeal";
import UpComingMeals from "../Dashboard/UpComingMeals/UpComingMeals";
import AdminRoutes from "./AdminRoutes";
import UpdateMeal from "../Dashboard/UpdateMeal/UpdateMeal";
import PackageDetails from "../../Home/Home/PackageDetails/PackageDetails";
import CheckOut from "../Dashboard/CheckOut/CheckOut";
import Payment from "../Payment/Payment";


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
        loader: ({params})=> fetch(`https://assignment-server-fawn.vercel.app/details/${params.id}`)
       },
       {
        path: '/packageDetails/:id',
        element: <PackageDetails></PackageDetails>,
        loader: ({params})=> fetch(`https://assignment-server-fawn.vercel.app/packageDetails/${params.id}`)
      },
      {
        path: 'checkout/:package',
        element: <CheckOut></CheckOut>,
        loader: ({params})=> fetch(`https://assignment-server-fawn.vercel.app/packageDetails/${params.package}`)
      },
      {
        path: '/payment/:package',
        element: <Payment></Payment>,
        loader: ({params})=> fetch(`https://assignment-server-fawn.vercel.app/packageDetails/${params.package}`)
      },
     
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [

        //user dashboard
        {
          path: 'myprofile',
          element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
        }, 
        {
          path: 'requestmeals', 
          element: <PrivateRoutes><RequestMeals></RequestMeals></PrivateRoutes>
        }, 
        {
          path: 'myreview',
          element: <PrivateRoutes> <MyRiview></MyRiview></PrivateRoutes>
        },
        {
          path: 'paymenthistory',
          element: <PrivateRoutes> <PaymentHistory></PaymentHistory></PrivateRoutes>
        },
       
       


        //admin dashboard
        {
          path: 'adminprofile',
          element: <AdminRoutes><AdminProfile></AdminProfile></AdminRoutes>
        },
        {
          path: 'manageusers',
          element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
        },
        {
          path: 'addmeal',
          element: <AdminRoutes><AddMeal></AddMeal></AdminRoutes>
        },
        {
          path: 'allmeal',
          element: <AdminRoutes><AllMeal></AllMeal></AdminRoutes>
        },
        {
          path: 'allriview',
          element: <AdminRoutes><AllRiview></AllRiview></AdminRoutes>
        },
        {
          path: 'servemeal',
          element: <AdminRoutes><ServeMeal></ServeMeal></AdminRoutes>
        },
        {
          path: 'upcomingmeals',
          element: <AdminRoutes><UpComingMeals></UpComingMeals></AdminRoutes>
        },
        {
          path:'upadeMeal/:id',
          element: <AdminRoutes><UpdateMeal></UpdateMeal></AdminRoutes>,
          loader: ({params}) => fetch(`https://assignment-server-fawn.vercel.app/mealsUpdate/${params.id}`)
        }
      ]
    }
])