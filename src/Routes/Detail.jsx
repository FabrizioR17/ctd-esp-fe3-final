import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const DentistDetail = () => {
  const { id } = useParams();  // Obtiene el id de la URL
  const [dentist, setDentist] = useState(null);  // Estado para almacenar los datos del dentista
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    // Hace una llamada a la API para obtener los datos del dentista con el ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data));
  }, [id]);

  if (!dentist) return <p>Loading...</p>;  // Muestra un mensaje de carga mientras se obtienen los datos

  return (
    <div className={`detail-container ${state.theme}`}>
      <h2 className="detail-title">Detail Dentist {dentist.name}</h2>
      <table className="detail-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DentistDetail;
