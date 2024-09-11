import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const DentistDetail = () => {
  const { id } = useParams(); 
  const { state } = useContext(ContextGlobal); 
  const [dentist, setDentist] = useState(null); 

  useEffect(() => {
    // Intenta encontrar el dentista en el estado global (state.data)
    const dentistFromState = state.data.find(dentist => dentist.id === parseInt(id));

    if (dentistFromState) {
      setDentist(dentistFromState);  // Si el dentista existe en el estado global, lo establece
    } else {
      // Si no está en el estado global, realiza una solicitud fetch
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => setDentist(data))
        .catch(error => console.error("Error fetching dentist:", error));
    }
  }, [id, state.data]);

  if (!dentist) return <p>Loading...</p>; 

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

