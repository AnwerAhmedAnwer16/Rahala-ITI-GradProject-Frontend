import { Link, NavLink } from "react-router-dom";
import NotificationButton from "../buttons/notificationbutton.js";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import './navBar.css';
import logo from '../../assets/Rahala_logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="navbar-custom">
      {/* Logo */}
    

      <Link to="/" className="logo">
        <img src={logo} alt="Rahala Logo" className="logo-img" />
      </Link>


      {/* Desktop Navigation */}
      <div className="desktop-links">
        <NavLink to="/" className="nav-link">
        <i className="bi bi-house-door-fill"></i>
         Home</NavLink>
        <NavLink to="/explore" className="nav-link">
        <i className="bi bi-compass-fill"></i>
         Explore</NavLink>
      </div>

      {/* Desktop Right Side */}
      <div className="desktop-actions">
        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <FaSearch className="search-icon" />
        </div>

        {/* Add Trip */}
        <NavLink
          to="/add-trip"
          className="nav-link add-trip-button"
        >
          <i className="bi bi-plus-circle-fill"></i>
          Add Trip
        </NavLink>


        {/* Notifications */}
        <div className="notification-container">
          <NotificationButton count={3} onClick={() => console.log(" see notifications")} />
        </div>

        {/* User Avatar */}
        <div className="profile-container">
          <button onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <FaUserCircle className="profile-icon" />
          </button>
          {showProfileMenu && (
            <div className="profile-menu">
              <Link to="/profile" className="menu-item"> Profile </Link>
              <Link to="/settings" className="menu-item">Settings</Link>
              <button className="menu-item logout"> Log Out </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-button">
        <button onClick={() => setShowMenu(true)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {showMenu && (
        <div className="mobile-sidebar-overlay">
          <div className="mobile-sidebar">
            {/* Close Button */}
            <button className="close-button" onClick={() => setShowMenu(false)}>
              <FaTimes />
            </button>

            {/* Links */}
            <div className="mobile-links">
              <NavLink to="/" onClick={() => setShowMenu(false)}> Home </NavLink>
              <NavLink to="/explore" onClick={() => setShowMenu(false)}>Explore</NavLink>
            </div>

            {/* Search */}
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <FaSearch className="search-icon" />
            </div>

            {/* Notifications */}
            <div className="notification-container">
              <NotificationButton count={3} onClick={() => console.log("see notifications ")} />
            </div>

            {/* Profile Links */}
            <div className="mobile-profile-links">
              <Link to="/profile" onClick={() => setShowMenu(false)}>Profile</Link>
              <Link to="/settings" onClick={() => setShowMenu(false)}>Settings</Link>
              <button onClick={() => console.log("Log Out ")} className="logout">Log Out </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;