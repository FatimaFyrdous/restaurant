import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import MenuAndPricing from './components/MenuAndPricing.jsx';
import OpeningHours from './components/OpeningHours.jsx';
import About from './components/AboutUs.jsx';
import Contact from './components/ContactUs.jsx';

import FooterEnd from './components/Footer.jsx';
import Navigation from './components/NavBar.jsx';


function App() {

  return (
    <>
      <Navigation/>

      <Routes>
        <Route path='*' element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/menu-and-pricing' element={<MenuAndPricing />} /> 
        <Route path='/opening-hours' element={<OpeningHours />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>

      <FooterEnd />
    </>
  )
}

export default App
