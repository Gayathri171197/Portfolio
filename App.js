import React from 'react';
import Home from 'Home.js';
import AboutMe from 'AboutMe.js';
import Project from 'Project.js';
import Contact from 'Contact.js';
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
