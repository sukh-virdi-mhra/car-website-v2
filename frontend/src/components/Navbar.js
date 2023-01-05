import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-unordered-list">
        <li className="nav-list">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav-list">
          <Link to="/cars">CARS</Link>
        </li>
        <li className="nav-list">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
