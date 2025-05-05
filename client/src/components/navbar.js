import React from 'react';
import '../assets/styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text block">APARTHOTEL</span>
        <span className="logo-text-lowercase"><br/>Database Management System</span>
      </div>

      <div className="navbar-search">
        <input 
          type="text" 
          placeholder="Search for rooms, guests..." 
          className="search-input"
        />
        <button className="search-button">
          Search
        </button>
      </div>

      <div className="navbar-profile">
        <FontAwesomeIcon icon={faUser} className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;