import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center py-24'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from : location}} replace></Navigate>;
};

export default PrivateRoutes;