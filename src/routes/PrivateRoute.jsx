import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';

const PrivateRoute = ({ requiredRole }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user && user.role !== requiredRole) {
    // Redirigir a una página de "acceso denegado" o a su dashboard
    return <Navigate to={`/${user.role}/dashboard`} />;
  }

  return (
    <Layout userRole={requiredRole}>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;
