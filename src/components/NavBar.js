import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        // activeStyle={{
        //   background: "darkblue",
        // }}
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        exact
        style={linkStyles}
        // activeStyle={{
        //   background: "darkblue",
        // }}
      >
        About
      </NavLink>
      <NavLink
        to="/ContactList"
        exact
        style={linkStyles}
        // activeStyle={{
        //   background: "darkblue",
        // }}
      >
        ContactList
      </NavLink>
    </div>
  );
}

export default NavBar;