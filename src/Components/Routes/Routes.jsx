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
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
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
        {
          path: 'adminprofile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'manageusers',
          element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
        },
        {
          path: 'addmeal',
          element: <AddMeal></AddMeal>
        },
        {
          path: 'allmeal',
          element: <AllMeal></AllMeal>
        },
        {
          path: 'allriview',
          element: <AllRiview></AllRiview>
        },
        {
          path: 'servemeal',
          element: <ServeMeal></ServeMeal>
        },
        {
          path: 'upcomingmeals',
          element: <UpComingMeals></UpComingMeals>
        }
      ]
    }
])