import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  if (user && user?.email) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }}></Navigate>
    </div>
  );
};

export default PrivateRoute;
