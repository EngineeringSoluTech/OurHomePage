
import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import Test from "./Test";
import End from "./components/end/End";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import TransitionPageExample from "./pages/transitionPageExample"

import "./app.scss"
const App = () => {

  // const location = useLocation();

  return (
  <div>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section id="About">
      <Services/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
     <Portfolio />
    <section id="Contact">
      <Contact/>
    </section>
    {/* <section id="End">
      <End/>
    </section> */}
    {/* <Test/> */}

    <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/example' element={<TransitionPageExample />}/>
      </Routes>
    </Router>
  </div>
  )
};

export default App;
