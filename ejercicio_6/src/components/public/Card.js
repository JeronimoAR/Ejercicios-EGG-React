import React from 'react'

function Card({personaje}) {
  return (
    <div className="card">
      <div className="card-head">
        <img src={personaje.image} alt='Card-img' />
      </div>
      <div className="card-body">
        <h1>{personaje.name}</h1>
        <h3>Species: {personaje.species}</h3>
        <h3>Estatus: {personaje.status}</h3>
      </div>
    </div>
  )
}

export default Card
