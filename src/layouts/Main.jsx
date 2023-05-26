import React from 'react';
import Navbar from '../pages/shared/Heaer/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollRestoration></ScrollRestoration>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;