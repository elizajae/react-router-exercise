import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";
import { useState } from "react";

const Redirect = () => {
  return <Navigate to="/colors" replace />;
};

const App = () => {
  const [colors, setColors] = useState([
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div id="app">
      <Routes>
        <Route exact path="/colors" element={<ColorsList colors={colors} />} />
        <Route
          path="/colors/:color"
          element={<ColorDetails colors={colors} />}
        />
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  );
};

export default App;
