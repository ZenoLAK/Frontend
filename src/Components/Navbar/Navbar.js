import React, { useState } from "react";
import "./navbar.scss";
import arrow from "../../assets/shape.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <ul className="navbar__left">
        <li className="navbar__item">
          <a href="#">About</a>
        </li>
        <li className="navbar__item">
          <a href="#">News</a>
        </li>
        <li className="navbar__item">
          <a href="#">Services</a>
        </li>
        <li className="navbar__item">
          <a href="#">Our Team</a>
        </li>
        <li className="navbar__item">
          <a href="#">Make Enquiry</a>
        </li>
      </ul>
      <div className="navbar__right">
        <button className="navbar__button">
          Contact Us
          <img src={arrow} alt="Contact us" />
        </button>
      </div>
      <div className="navbar__mobile">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="navbar__hamburger"
        >
          <img src={hamburger} alt="Menu" />
        </button>
        <ul
          className="navbar__menu"
          style={{ display: showMenu ? "" : "none" }}
        >
          <li className="navbar__item">
            <a href="#">About</a>
          </li>
          <li className="navbar__item">
            <a href="#">News</a>
          </li>
          <li className="navbar__item">
            <a href="#">Services</a>
          </li>
          <li className="navbar__item">
            <a href="#">Our Team</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
