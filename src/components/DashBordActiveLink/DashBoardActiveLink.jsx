import React from 'react';
import { NavLink } from 'react-router-dom';
import "./DashBoardActiveLink.css"

const DashBoardActiveLink = ({to , children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "active-dashboard" : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default DashBoardActiveLink;