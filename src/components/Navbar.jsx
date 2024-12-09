import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MySite</h2>
      </div>
      <ul className={`nav-links ${isMobile ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Toggle icons */}
      </div>
    </nav>
  );
};

export default Navbar;

