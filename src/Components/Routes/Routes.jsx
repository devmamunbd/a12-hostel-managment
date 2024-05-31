import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import RootLayout from "../../RootLayout/RootLayout";


export const router = new createBrowserRouter([
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [ 
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    }
])