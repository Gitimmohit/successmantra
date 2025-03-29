// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Component/layout/Layout";
import Course from "./Pages/course/Course";
import Gallery from "./Pages/galary/Gallery";
import AboutPage from "./Pages/about/AboutPage";
import ContactPage from "./Pages/contact/ContactPage";
import RegistrationPage from "./Pages/registration/RegistrationPage";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/galary" element={<Gallery />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
