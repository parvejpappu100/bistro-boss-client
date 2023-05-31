import React from 'react';
import { FaHome, FaCalendarAlt, FaWallet, FaCartArrowDown, FaCommentAlt, FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import DashBoardActiveLink from '../components/DashBordActiveLink/DashBoardActiveLink';
import useCart from '../hooks/useCart';

const DashBoard = () => {

    const [cart] = useCart();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  bg-gray-100 relative">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className=" top-2 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content uppercase title font-semibold text-base">
                    <div className='text-center font-bold uppercase  py-16'>
                        <p className='text-3xl '>BISTRO BOSS</p>
                        <p className='  text-xl md:tracking-wider '>R e s t a u r a n t</p>
                    </div>
                    <li>
                        <DashBoardActiveLink to="/dashBoard/userHome"><FaHome></FaHome> User Home</DashBoardActiveLink>
                    </li>
                    <li>
                        <Link><FaCalendarAlt></FaCalendarAlt> Reservation</Link>
                    </li>
                    <li>
                        <Link><FaWallet></FaWallet> Payment History</Link>
                    </li>
                    <li>
                        <DashBoardActiveLink to="/dashBoard/myCart"><FaCartArrowDown></FaCartArrowDown> My Cart <span className=" badge badge-secondary">+{cart.length || 0}</span></DashBoardActiveLink>
                    </li>
                    <li>
                        <Link><FaCommentAlt></FaCommentAlt> Add Review</Link>
                    </li>
                    <li>
                        <Link><FaCalendarAlt></FaCalendarAlt> My Booking</Link>
                    </li>
                    <div className="divider bg-white h-1"></div>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/menu">Our Menu</Link>
                    </li>
                    <li>
                        <Link to="/ourShop/salads">Our Shop</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;