import React from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const newColor = (e) => {
    e.preventDefault();
    addColor({ name, value });
    navigate("/colors");
  };

  return (
    <div>
      <h1>Choose your own color!</h1>
      <form onSubmit={newColor}>
        <input
          type="text"
          id="name"
          placeholder="Color name"
          name={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="color">Color:</label>
        <input
          type="color"
          id="color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add this color</button>
      </form>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default NewColorForm;
