import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/Home';
import styled from 'styled-components';
import Contact from './components/pages/Contact';
import About from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AboutMe' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Resume' element={<Resume />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
