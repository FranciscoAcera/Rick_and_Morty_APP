import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import style from './Detail.module.css'

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
return setCharacter({});
}, [id]);
return ( 
<div className={style.container} >
{character.name &&(
      <><div className={style.detailImg}>
            <img src={character.image} alt={character.name} />
         </div>
         <div className={style.detailCharacter}>
               {character.name && <h2>Name: {character.name}</h2>}
               {character.name && <h2>Status: {character.status}</h2>}
               {character.name && <h2>Specie: {character.species}</h2>}
               {character.name && <h2>Gender: {character.gender}</h2>}
               {character.name && <h2>Origin: {character.origin.name}</h2>}
            </div></>
)} 
</div>
)  
}

export default Detail;