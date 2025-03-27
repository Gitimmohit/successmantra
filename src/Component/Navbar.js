import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 950);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 950);
      if (window.innerWidth >= 950) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img src={logo} style={{ height: "60px", width: "60px" }} />
      </div>

      {/* Desktop Navigation - shows when not in mobile view */}
      {!isMobileView && (
        <div className="navbar-links">
          <a href="/course">All Courses</a>
          <a href="/galary">Gallery</a>
          <button className="login-btn">Login/Register</button>
        </div>
      )}

      {/* Mobile Menu Button - shows only in mobile view */}
      {isMobileView && (
        <>
          <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
            <a href="/course">All Courses</a>
            <a href="/galary">Gallery</a>
            <button className="login-btn">Login/Register</button>
          </div>
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
