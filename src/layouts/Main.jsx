import React from 'react';
import Navbar from '../pages/shared/Heaer/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
    
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes("login")

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <ScrollRestoration></ScrollRestoration>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;