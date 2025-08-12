import React from "react";
import "../pages/Auth/auth.css"; // 

const AuthLayout = ({ children }) => {
  return (
    <div className="user-card-container">
      {children}
    </div>
  );
};

export default AuthLayout;