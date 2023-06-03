import React from "react";
import { Link } from "react-router-dom";

function Card({ personaje }) {
  return (
    <div className="card">
      <div className="card-head">
        <img src={personaje.image} alt="Card-img" />
      </div>
      <div className="card-body">
        <h1>{personaje.name}</h1>
        <h3>Species: {personaje.species}</h3>
        <h3>Estatus: {personaje.status}</h3>
        <h3>Origin: {personaje.origin?.name}</h3>
        <Link to={`/details/${personaje.id}`}>
          <button className="card-btn">Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
