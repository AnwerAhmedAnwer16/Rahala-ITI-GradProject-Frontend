import React from "react";
import "../pages/Auth/auth.css"; // 
import Footer from "../components/footer/footer.js"; // Import the Footer component
const AuthLayout = ({ children }) => {
  return (
    <>
    <div className="user-card-container">
      {children}
    </div>
    <Footer />
    </>
  );
};

export default AuthLayout;