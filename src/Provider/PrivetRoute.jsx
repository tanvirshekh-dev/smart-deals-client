import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user} = use(AuthContext)

    const location = useLocation()
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRoute;