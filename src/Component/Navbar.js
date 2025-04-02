import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../img/logo.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 950);
  const [activeTab, setActiveTab] = useState("");

  // Set active tab based on current route
  useEffect(() => {
    const path = location.pathname;
    setActiveTab(path);
  }, [location]);

  // Toggle mobile menu & lock scroll
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen && isMobileView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isMobileMenuOpen, isMobileView]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 950);
      if (window.innerWidth >= 950) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" style={{ height: "60px", width: "60px" }} />
      </div>

      {/* Desktop Navigation */}
      {!isMobileView && (
        <div className="navbar-links">
          <a
            href="/course"
            className={activeTab === "/course" ? "active-tab" : ""}
          >
            All Courses
          </a>
          <a
            href="/galary"
            className={activeTab === "/galary" ? "active-tab" : ""}
          >
            Gallery
          </a>
          <a
            href="/about"
            className={activeTab === "/about" ? "active-tab" : ""}
          >
            About Us
          </a>
          <a
            href="/contact"
            className={activeTab === "/contact" ? "active-tab" : ""}
          >
            Contact
          </a>
          <button className={"login-btn"} onClick={() => navigate("/register")}>
            Register Now
          </button>{" "}
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobileView && (
        <>
          <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="mobile-menu-scroll-container">
              <a
                href="/course"
                className={activeTab === "/course" ? "active-tab" : ""}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Courses
              </a>
              <a
                href="/galary"
                className={activeTab === "/galary" ? "active-tab" : ""}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/about"
                className={activeTab === "/about" ? "active-tab" : ""}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="/contact"
                className={activeTab === "/contact" ? "active-tab" : ""}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button
                className={
                  activeTab === "/register" ? "login-btn" : "login-btn"
                }
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = "/register"; // Or use your router's navigation method
                }}
              >
                Register Now
              </button>
            </div>
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
