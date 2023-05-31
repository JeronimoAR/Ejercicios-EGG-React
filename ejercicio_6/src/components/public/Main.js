import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RMService from "../../services/RM.service";

function Main() {

  return (
    <div>
      <div className="main-head">
        <h1>Rick And Morty API</h1>
      </div>
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}

export default Main;
