import React from 'react';
import Home from 'Home';
import AboutMe from 'AboutMe';
import Project from 'Project';
import Contact from 'Contact';
import { Routes, Route } from 'react-router-dom';
import 'style.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
