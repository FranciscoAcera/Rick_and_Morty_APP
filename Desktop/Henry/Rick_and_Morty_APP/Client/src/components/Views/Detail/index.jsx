import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import style from './Detail.module.css'

export default function Detail() {
const { id } = useParams();
const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((error) => window.alert(error.response.data.error));

    return setCharacter({});
  }, [id]);

return ( 
<div className={style.container} >
      <div className={style.detailImg}>
            <img src={character.image} className={style.img} alt={character.name} />
         </div>
         {character.name &&(
         <div className={style.detailCharacter}>
          <h2>STATUS: {character.status}</h2>
          <h2>SPECIES: {character.species}</h2>
          <h2>GENDER: {character.gender}</h2>
          <h2>ORIGIN: {character.origin}</h2>
          </div>
)} 
</div>
)  
}
