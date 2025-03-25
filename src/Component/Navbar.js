import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">PW</div>
      
      {/* Desktop Navigation - shows when not in mobile view */}
      {!isMobileView && (
        <div className="navbar-links">
          <a href="/">All Courses</a>
          <a href="/">Vidyapeeth</a>
          <a href="/">Upskilling</a>
          <a href="/">PW Store (Books)</a>
          <a href="/">REAL Test</a>
          <a href="/">CuriousJr</a>
          <a href="/">Power Batch</a>
          <button className="login-btn">Login/Register</button>
        </div>
      )}

      {/* Mobile Menu Button - shows only in mobile view */}
      {isMobileView && (
        <>
          <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="/">All Courses</a>
            <a href="/">Vidyapeeth</a>
            <a href="/">Upskilling</a>
            <a href="/">PW Store (Books)</a>
            <a href="/">REAL Test</a>
            <a href="/">CuriousJr</a>
            <a href="/">Power Batch</a>
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