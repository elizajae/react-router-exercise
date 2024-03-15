import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ColorDetails = ({ colors }) => {
  const { color: colorName } = useParams();
  const color = colors.find((color) => color.name === colorName);
  const navigate = useNavigate();

  return (
    <div
      className="color-item"
      style={{ backgroundColor: color.value, height: "100vh", width: "100vh" }}
    >
      <h1>This is {color.name}!</h1>
      <p>Isn't it beautiful?</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default ColorDetails;
