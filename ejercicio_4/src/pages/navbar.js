import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./main";
import Main2 from "./main2";
import logo from "../logo.svg";

function Navbar() {
  return (
    <BrowserRouter>
      <nav>
        <Link className="Logo-link" to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="container">
          <Link to="/main1">Main #1</Link>
          <Link to="/main2">Main #2</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/main1" element={<Main />} />
        <Route exact path="/main2" element={<Main2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
