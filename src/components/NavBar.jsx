import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav-bar.css";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="navbar-logo">
        <NavLink to="/">
          <h1>Hinckley Crumpet</h1>
        </NavLink>
      </div>
      <ul className="navbar-menu">
      <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu-and-pricing"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Menu & Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/opening-hours"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Opening Hours
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="navbar-contact">
        <a href="tel:+441416112980">
          <span>01416112980</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
