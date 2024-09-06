import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const [users, setUsers] = useState([]);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map(user => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
};

export default Home;
