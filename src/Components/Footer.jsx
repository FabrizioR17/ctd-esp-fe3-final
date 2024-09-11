import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context'; // Importa el contexto
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { state } = useContext(ContextGlobal); // Accede al tema global

  return (
    <footer className={`footer ${state.theme}`}> {/* Aplica el tema aquí */}
      <button className="back-button" onClick={() => navigate("/home")}>
        Volver para el inicio
      </button>
      <div className="footer-left">
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" />
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com">
          <img src="/images/ico-facebook.png" alt="Facebook Logo" className="social-icon" />
        </a>
        <a href="https://www.instagram.com">
          <img src="/images/ico-instagram.png" alt="Instagram Logo" className="social-icon" />
        </a>
        <a href="https://www.whatsapp.com">
          <img src="/images/ico-whatsapp.png" alt="WhatsApp Logo" className="social-icon" />
        </a>
        <a href="https://www.tiktok.com">
          <img src="/images/ico-tiktok.png" alt="TikTok Logo" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;