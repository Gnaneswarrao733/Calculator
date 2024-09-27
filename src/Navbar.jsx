// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Optional CSS for styling

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <button onClick={toggleMenu} className="menu-toggle">
        Toggle Side Menu
      </button>
    </nav>
  );
};

export default Navbar;
