import React from "react";
import logo from "./images/LOGO.gif";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navLinks">
        <Link to="/" className="logoLink">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link to="/" className="home-btn">
          Home
        </Link>
      </div>
      <div className="nav-util">
        <input
          type="text"
          name="search"
          id="search"
          className="search"
          placeholder="Search"
        />
        <div className="navBtns">
          <Link to="/User/Login"><button className="logIn">Log in</button></Link>
          <Link to="/User/Register"><button className="signUp">Sign up</button></Link>
        </div>
      </div>
    </nav>
  );
}
