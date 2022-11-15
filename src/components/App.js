import React from 'react';
import '../index.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import ContactList from './ContactList';
import NavBar from './NavBar';
import About from './About';

function App() {
 
  return (
    <div className='body'>
      <div>
        <div className="font-weight-light">Contact App</div>
      <NavBar />
      <Routes>
        <Route path="/contact-app" element={<Home />} />
        <Route path="/contact-app/About" element={<About />} />
        <Route path="/contact-app/ContactList" element={<ContactList />} />
      </Routes>
    </div>
    </div>
  );
}  

export default App