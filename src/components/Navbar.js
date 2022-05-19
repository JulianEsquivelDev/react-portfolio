import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import './pages/Contact';

const Navbar = () => {
    return (
       <>
          <div>
          <nav>
          <ul>
            <li className="home-nav">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/AboutMe">About Me</Link>
            </li>
          </ul>
        </nav>
          </div>
       </>
    )
}

export default Navbar