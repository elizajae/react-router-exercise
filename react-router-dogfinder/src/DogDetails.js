import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name === name);

  return (
    <div>
      {dog ? (
        <>
          <h1>{dog.name}</h1>
          <img src={`/${dog.src}`} alt={dog.name} />
          <ul>
            {dog.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </>
      ) : (
        <h1>Dog not found</h1>
      )}
    </div>
  );
};

export default DogDetails;
