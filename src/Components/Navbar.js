import React, { createRef } from "react";
import { NavLink } from "react-router-dom";
import "../main.css";
import Logo from "../Images/Logo.svg";

const Navbar = () => {
  const navRef = createRef();

  return (
    <div className="navbar">
      <div className="container-logo">
        <a href="/">
          <img className="img-log" src={Logo} alt="logo" />
        </a>
      </div>
      <ul className="nav-list" ref={navRef}>
        <li className="list-item">
          <NavLink to="/" activeclassname="active">
            HOME
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/about-us">ABOUT US</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/contact-us">CONTACT US</NavLink>
        </li>
        <li className="list-item btn-login">Log in</li>
      </ul>
    </div>
  );
};

export default Navbar;
