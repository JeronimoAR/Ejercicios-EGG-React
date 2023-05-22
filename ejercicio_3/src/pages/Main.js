import React from 'react'

function Hijo(persona){
    return(
        <h1>Hola, {persona.nombre}</h1>
    )
}

function Main() {
  return (
    <div>
      <Hijo nombre={"Chikito"} />
      <Hijo nombre={"Filomena"} />
    </div>
  )
}

export default Main
