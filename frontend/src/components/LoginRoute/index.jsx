import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/request";

const LoginRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/home" /> : children;
};

export default LoginRoute;
