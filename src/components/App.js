import React from 'react';
import '../index.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import ContactList from './ContactList';
import NavBar from './NavBar';
import AddContact from './AddContact';

function App() {
 
  return (
    
    <div className='body'>
      <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AddContact" element={<AddContact />} />
        <Route path="/ContactList" element={<ContactList />} />
      </Routes>
    </div>
    
    </div>

  );
}  

export default App