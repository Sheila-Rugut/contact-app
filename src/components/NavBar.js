import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';
// import styled from 'styled-components';

//  const linkStyles = {
// //   display: "inline-block",
// //    width: "100px",
// //    padding: "12px",
// //  margin: "0 6px 6px",
// //    background: "blue",
// //   textDecoration: "none",
     
    
      
//  };

function NavBar() {
  return (
    <div className="nav">
      <div className="ape">Contact Manager</div>
      <ul>
      <li><NavLink
        to="/"
      >
        Home
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/ContactList"
      >
        Contact List
      </NavLink></li>
      
      <li><NavLink
        to="/AddContact"
      >
        Add Contact
      </NavLink>
      </li>
      </ul>
    </div>
  );
}

export default NavBar;