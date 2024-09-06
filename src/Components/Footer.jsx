import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context'; // Importa el contexto
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { state } = useContext(ContextGlobal); // Accede al tema global

  return (
    <footer className={state.theme}> {/* Aplica el tema aquí */}
      <button className="back-button" onClick={() => navigate("/home")}>
        Volver para el inicio
      </button>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;

