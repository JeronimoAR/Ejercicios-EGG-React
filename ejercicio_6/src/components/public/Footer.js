import React from "react";
import logo from "./images/LOGO.gif";

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
        <p>{year} Copyright &copy; Jero React-App</p>
      <img src={logo} className="App-logo" alt="logo" />
    </footer>
  );
}

export default Footer;
