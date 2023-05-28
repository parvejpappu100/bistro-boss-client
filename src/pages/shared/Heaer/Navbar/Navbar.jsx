import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import shoppingCartIcon from "../../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
import "./Navbar.css"
import ActiveLink from '../../../../components/ActiveLink/ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProviders';

const Navbar = () => {

    const { user , logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut(result => {
            
        })
        .then()
        .catch(error => console.log(error.message))
    }

    const navOptions = <>
        <li>
            <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li>
            <a>Contact</a>
        </li>
        <li>
            <a>Dashboard</a>
        </li>
        <li>
            <ActiveLink to="/menu">Our Menu</ActiveLink>
        </li>
        <li>
            <ActiveLink to="/ourShop/salads">Our Shop</ActiveLink>
        </li>
        <li>
            <Link>
                {/* <FaShoppingCart className='text-xl bg-green-700 rounded-full h-8 w-8 p-1'>
                </FaShoppingCart> */}
                <img className='h-10 w-10' src={shoppingCartIcon} alt="" />
            </Link>
        </li>
        <li>
            {
                user ? <><Link onClick={handleLogOut}>Log Out</Link></> : <><ActiveLink to="/login">Login</ActiveLink></>
            }
        </li>

    </>

    return (
        <div className="navbar  bg-black bg-opacity-50 font-semibold fixed z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {navOptions}
                    </ul>
                </div>
                <a className="md:text-2xl text-white title lg:ps-5">
                    <p>BISTRO BOSS</p>
                    <p className='text-base md:tracking-wider'>R e s t a u r a n t</p>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex pr-5">
                <ul className="menu menu-horizontal px-1 uppercase text-white">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;