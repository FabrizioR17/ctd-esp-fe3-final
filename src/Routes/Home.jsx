import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  
  if (state.data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
};

export default Home;
