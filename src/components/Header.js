import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Store Rating</Link>
        </h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add-store" className="nav-link">Add Store</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
