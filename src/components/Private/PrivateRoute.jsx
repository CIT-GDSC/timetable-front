// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context";

const PrivateRoute = () => {
  const { token } = useStateContext();

  return token ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
};

export default PrivateRoute;
