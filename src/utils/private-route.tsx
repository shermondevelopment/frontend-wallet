import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ user, children }: any) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute