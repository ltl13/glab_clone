import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import "./Navbar.sass";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
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
      <nav className="navbar__menu"></nav>
    </div>
  );
};

export default Navbar;
