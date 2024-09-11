import React, { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";

// Tipos de acción
const TOGGLE_THEME = "TOGGLE_THEME";
const SET_DATA = "SET_DATA";
const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const SET_FAVS = "SET_FAVS";

// Estado inicial
export const initialState = {
  theme: "light",
  data: [],
  favs: [],
};

// Reducer para manejar el estado
const contextReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_FAVS:
      return {
        ...state,
        favs: action.payload,
      };
    case ADD_FAV:
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return {
        ...state,
        favs: newFavs,
      };
    case REMOVE_FAV:
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

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    dispatch({ type: SET_FAVS, payload: savedFavs });
  }, []);

  // Fetch de los datos desde la API
  useEffect(() => {
    if (state.data.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          dispatch({ type: SET_DATA, payload: response.data });
        })
        .catch((error) => console.log(error));
    }
  }, [state.data]);

  // Cambio de tema en el body
  useEffect(() => {
    document.body.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  // Memorizar el valor del contexto para mejorar el rendimiento
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>;
};
