import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop";

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
            }
        ]
    },
]);