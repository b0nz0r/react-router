import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ toggleShow }) {
  return (
    <div className="Navbar">
      <NavLink to="/">
        <img
          src="https://media.baamboozle.com/uploads/images/252715/1614542200_110083_gif-url.gif"
          alt="Website Logo"
          height={"100%"}
        />
      </NavLink>
      <button onClick={toggleShow}>
        <span className="toShow">Add more </span>
        <strong>+</strong>
      </button>
    </div>
  );
}

export default Navbar;
