import React from "react";
import Card from "./Card";
import bands from "../bands";

function createCard(bands) {
  return (
    <Card
      key={bands.id}
      name={bands.name}
      img={bands.imgURL}
      origin={bands.origin}
      formedIn={bands.formedIn}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Favourite Bands</h1>
      {bands.map(createCard)}
    </div>
  );
}

export default App;
