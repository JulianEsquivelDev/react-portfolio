import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Contact' exact component={Contact} />
        <Route path='/AboutMe' exact component={About} />
        <Route path='/Portfolio' exact component={Portfolio} />
        <Route path='/Resume' exact component={Resume} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
