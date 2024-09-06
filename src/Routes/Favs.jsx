import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  // Función para eliminar un favorito
  const removeFav = (id) => {
    const updatedFavs = favs.filter(fav => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    window.location.reload(); // Recargar la página para reflejar los cambios
  };

  // Función para resetear todos los favoritos
  const resetFavs = () => {
    localStorage.removeItem("favs");
    window.location.reload(); // Recargar la página para reflejar los cambios
  };

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      
      {/* Botón para resetear todos los favoritos */}
      {favs.length > 0 && (
        <button onClick={resetFavs} className="reset-favs-btn">
          Reset All Favs
        </button>
      )}

      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map(fav => (
            <div key={fav.id} className="fav-card">
              <Card {...fav} />
              {/* Botón para eliminar un favorito */}
              <button 
                onClick={() => removeFav(fav.id)} 
                className="remove-fav-btn"
              >
                Remove from Favs
              </button>
            </div>
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favs;

