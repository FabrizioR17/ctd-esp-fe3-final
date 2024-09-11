import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={state.theme}>
      <img src="/images/DH.png" alt="DH-logo" />
      <a href="/home">Home</a>
      <a href="/contact">Contact</a>
      <a href="/favs">Favs</a>
      <button onClick={toggleTheme} className="theme-toggle-button"></button>
    </nav>
  );
};

export default Navbar;

