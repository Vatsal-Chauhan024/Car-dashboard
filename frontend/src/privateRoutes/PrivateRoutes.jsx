import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

  const [user, ] = useState(sessionStorage.getItem("userLoggedIn"));

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoutes;
