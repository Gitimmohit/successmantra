// src/Layout.js
import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../Navbar";


const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <main>{children}</main> 
      <Footer />
    </div>
  );
};

export default Layout;