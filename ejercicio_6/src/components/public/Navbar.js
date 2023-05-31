import React from "react";
import logo from "./images/LOGO.gif";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="nav-util">
        <input type="text" name="search" id="search" className="search" placeholder="Search"/>
        <div className="navBtns">
          <button className="logIn">Log in</button>
          <button className="signUp">Sign up</button>
        </div>
      </div>
    </nav>
  );
}
