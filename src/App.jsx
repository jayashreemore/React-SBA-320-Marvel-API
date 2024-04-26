// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Including the Navbar component */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
