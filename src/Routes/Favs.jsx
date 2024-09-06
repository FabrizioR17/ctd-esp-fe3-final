import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  // Log the favs key and value when the component is rendered
  useEffect(() => {
    console.log("key: favs");
    console.log("value:", favs);
  }, [favs]);

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map(fav => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

