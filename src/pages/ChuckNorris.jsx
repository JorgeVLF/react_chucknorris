import { useEffect, useState } from "react";

export default function ChuckNorris() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);

  if (!joke) {
    return <p>Carregando piada...</p>;
  }

  return (
    <div className="card">
      <img
        src={joke.icon_url}
        alt="Chuck Norris"
        style={{ display: "block", margin: "0 auto" }}
      />

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>
        {joke.value}
      </p>
    </div>
  );
}
