import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ShopLogo</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <input type="text" className="search-bar" placeholder="Search products..." />
      </nav>
    </header>
  );
};

export default Header;
