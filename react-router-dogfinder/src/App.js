import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

const Redirect = () => {
  return <Navigate to="/dogs" replace />;
};

function App({ dogs }) {
  return (
    <Routes>
      <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<Redirect />} />
    </Routes>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
  ],
};

export default App;
