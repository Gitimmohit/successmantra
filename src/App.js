// App.js
import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;