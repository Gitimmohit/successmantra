// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "./Component/layout/Layout";
import Course from "./Pages/course/Course";
import Gallery from "./Pages/galary/Gallery";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/galary" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;