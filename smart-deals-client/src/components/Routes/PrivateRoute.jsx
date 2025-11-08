import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { FadeLoader } from 'react-spinners';
import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location)
  if (loading) {
    return <div className='flex justify-center items-center h-screen'>
      <FadeLoader />
    </div>
  }

  if (user) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};


export default PrivateRoute;