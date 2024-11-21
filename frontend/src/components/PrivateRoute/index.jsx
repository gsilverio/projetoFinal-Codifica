import React from "react";
import { hasAnyRoles, isAuthenticated } from "../../utils/request";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ role = [] }) => {
  return isAuthenticated() ? (
    !hasAnyRoles(role) ? (
      <Navigate to={{ pathname: "/admin" }} />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={{ pathname: "/login" }} />
  );
};

export default PrivateRoute;
