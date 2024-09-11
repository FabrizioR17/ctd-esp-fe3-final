import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal); 

  
  const removeFav = (id) => {
    const favToRemove = state.favs.find(fav => fav.id === id);
    if (favToRemove) {
      dispatch({ type: "REMOVE_FAV", payload: favToRemove });
    }
  };


  const resetFavs = () => {
    dispatch({ type: "SET_FAVS", payload: [] });
    localStorage.removeItem("favs");
  };

  return (
    <div className={state.theme}>
      <h1>Dentistas Favoritos</h1>

      
      {state.favs.length > 0 && (
        <button onClick={resetFavs} className="reset-favs-btn">
          Reset All Favs
        </button>
      )}

      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map(fav => (
            <div key={fav.id} className="fav-card">
              <Card {...fav} />
              
              <button 
                onClick={() => removeFav(fav.id)} 
                className="remove-fav-btn"
              >
                Remove from Favs
              </button>
            </div>
          ))
        ) : (
          <p>No hay favoritos todavía!</p>
        )}
      </div>
    </div>
  );
};

export default Favs;


