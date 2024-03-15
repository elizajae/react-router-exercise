import React from "react";
import { Link } from "react-router-dom";

const ColorsList = ({ colors }) => {
  return (
    <div className="color-list">
      <h1>Welcome to The Color Factory</h1>
      <ul className="color-list-items">
        {colors.map((color) => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link className="add-color-btn" to="/colors/new">
        Add a color
      </Link>
    </div>
  );
};

export default ColorsList;
