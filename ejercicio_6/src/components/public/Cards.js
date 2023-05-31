import React, { useState, useEffect } from 'react'
import Card from './Card'
import RMService from "../../services/RM.service";


function Cards() {
  
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    RMService.getAllCharacters()
      .then((data) => setPersonajes(data.results))
      .catch((error) => console.log(error));
  }, []);

  console.log(personajes)

  const cardList = personajes.map((p) => <Card personaje={p} key={p.id}/>)

  return (
    <div className='content'>
      {cardList}
    </div>
  )
}

export default Cards
