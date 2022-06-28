import React from 'react';
import "../navbar/Navbar.scss";
import Logo from '../../logo.svg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} slt="City Tour Logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
