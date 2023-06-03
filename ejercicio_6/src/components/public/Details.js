import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import RMService from "../../services/RM.service";

function Details() {
  const [personaje, setPersonaje] = useState(``);
  const { id } = useParams();
  const { pathname } = useLocation();

  console.log(id);
  useEffect(() => {
    console.log(pathname);
    RMService.getCharacterById(id).then((data) => setPersonaje(data));
  }, []);

  console.log(personaje);

  return (
    <div className="card-details">
      <div className="details-head">
        <img src={personaje.image} alt="details-img" />
      </div>
      <div className="details-body">
        <h1>{personaje.name}</h1>
        <div className="details-body-content">
          <h3>Species: {personaje.species}</h3>
          <h3>Estatus: {personaje.status}</h3>
          <h3>Origin: {personaje.origin?.name}</h3>
        </div>
        <Link to="/">
          <button className="details-btn">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
