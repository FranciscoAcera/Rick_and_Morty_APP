import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import style from "./Card.module.css";

export function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  addFav,
  removeFav,
  allCharacters,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    let character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
    };

    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
    console.log(handleFavorite);
  };

  useEffect(() => {
    allCharacters?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);
  return (
    <div>
      <div className={style.contenedor}>
        <button className={style.button} onClick={() => onClose(id)}>
           X
        </button>
        {isFav ? (
          <button className={style.favButton1} onClick={handleFavorite}>
           ❤️
          </button>
        ) : (
          <button className={style.favButton2} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
        <img className={style.img} src={image} alt={name} />
      </div>
      <div>
        {/* <h2 >
          {species} - {gender}
        </h2> */}
        {/* <h2 >{origin?.name}</h2> */}
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
