import React, { useEffect, useState } from "react";

function App() {
  const [randomDog, setRandomDog] = useState([]); //<-- create a with empty Array to technically update it's variable and function
  const [loading, setLoading] = useState(false); //<-- create a message when loaded before the fetch renders false
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setRandomDog(data.message); //<-- inputting the data data.message into setRandomDog variable from State
        setLoading(true); //<-- setting the load to be true after the fetch renders
      }, []);
  });

  if (!loading) return <p>Loading...</p>; // create an if statement if the page hasn't loaded yet (!loading) return the message
  return <img alt="A Random Dog" src={randomDog}></img>; // else return expected information.
}
export default App;
