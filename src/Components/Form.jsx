import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (name.trim().length > 2 && emailRegex.test(email)) {
      setSubmitted(true);
      setError("");
      console.log("Datos enviados:", { name, email }); // Muestra los datos en consola
    } else {
      setSubmitted(false);
      setError("Por favor verifique su información nuevamente");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre completo" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar mensaje de error si no pasa las validaciones */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar mensaje de éxito si el formulario fue enviado */}
      {submitted && (
        <p>
          Gracias {name}, te contactaremos cuando antes vía mail a {email}.
        </p>
      )}
    </div>
  );
};

export default Form;
