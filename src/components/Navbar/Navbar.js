import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import "./Navbar.sass";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <div className="navbar__title__left"></div>
        <h1 className="navbar__title__text">glab</h1>
        <div className="navbar__title__icons">
          <i>
            <HiOutlineUserCircle />
          </i>
          <i>
            <AiOutlineSearch />
          </i>
          <i>
            <AiOutlineShoppingCart />
          </i>
        </div>
      </div>
      <nav className="navbar__menu">
        <ul>
          <li>
            <Link to="/" className="menu__item">Feature</Link>
          </li>
          <li>
            <Link to="/" className="menu__item">Footwear</Link>
          </li>
          <li>
            <Link to="/" className="menu__item">Apparel</Link>
          </li>
          <li>
            <Link to="/" className="menu__item">Accessories</Link>
          </li>
          <li>
            <Link to="/" className="menu__item">Used</Link>
          </li>
          <li>
            <Link to="/" className="menu__item">Sale</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
