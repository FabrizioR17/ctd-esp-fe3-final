import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const newFav = { name, username, id };

    // Verificar si ya está en favoritos
    if (!state.favs.some((fav) => fav.id === id)) {
      dispatch({ type: "ADD_FAV", payload: newFav });
      alert(`${name} fue añadido a tus favoritos!`);
    } else {
      alert(`${name} ya forma parte de tus favoritos!`);
    }
  };

  // Verificar si ya está en favoritos para cambiar el botón
  const isFav = state.favs.some((fav) => fav.id === id);

  return (
    <div className={`card ${state.theme}`}>
      <Link to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="Doctor" className="card-image" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton" disabled={isFav}>
        {isFav ? "Ya esta en favs ⭐" : "Añadir a favs ⭐"}
      </button>
    </div>
  );
};

export default Card;


