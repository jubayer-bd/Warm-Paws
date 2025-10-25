import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);
  const location = useLocation();
  //   console.log(location);

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }
   return <Navigate to="/login" state={{ from: location }} replace />;

  //if-> user thake return children
  // navigate--> Login
};

export default PrivateRoute;
