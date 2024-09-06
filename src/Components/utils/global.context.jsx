import React, { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";

// Estado inicial
export const initialState = {
  theme: "light",
  data: [], // Guardar los datos obtenidos de la API
  favs: JSON.parse(localStorage.getItem("favs")) || [], // Guardar favoritos
};

// Reducer para manejar el estado
const contextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_FAV":
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return {
        ...state,
        favs: newFavs,
      };
    case "REMOVE_FAV":
      const updatedFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return {
        ...state,
        favs: updatedFavs,
      };
    default:
      return state;
  }
};

// Crear el contexto
export const ContextGlobal = createContext(undefined);

// Proveedor del contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  // Fetch de los datos desde la API y almacenarlos en el contexto global
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "SET_DATA", payload: response.data });
      })
      .catch((error) => console.log(error));
  }, []);

  // Memorizar el valor del contexto para mejorar el rendimiento
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>;
};
