import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../JS/SearchBar";
import "../CSS/Nav.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='nav-bar'>
      <p className='title'>
        <Link to='/'>
          <img src='../IMG/cart.png' alt='Cart' />
        </Link>
        <Link to='/'>
          <h1>Fashion Shopping</h1>
        </Link>
      </p>

      <ul className='nav-menu'>
        <li>
          <Link to='/' className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/products'
            className={location.pathname === "/products" ? "active" : ""}>
            Clothing
          </Link>
        </li>
        <li>
          <Link
            to='/cart'
            className={location.pathname === "/cart" ? "active" : ""}>
            <img src='../IMG/addcart.png' className='cartimg' />
          </Link>
        </li>
        <li>
          <Link
            to='/search'
            className={location.pathname === "/search" ? "active" : ""}>
            <img src='../IMG/search.png' className='searchimg' />
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
