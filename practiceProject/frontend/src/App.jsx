import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <div>
      <h1>Frontend</h1>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
