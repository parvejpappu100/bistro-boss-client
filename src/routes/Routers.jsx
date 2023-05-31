import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Contact from "../pages/Contact/Contact";
import DashBoard from "../layouts/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/menu",
                element: <Menu></Menu>
            },
            {
                path: "/ourShop/:category",
                element: <Shop></Shop>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "/dashBoard",
        element: <DashBoard></DashBoard>,
        children: [
            {
               path: "myCart",
               element: <MyCart></MyCart> 
            }
        ]
    }
]);