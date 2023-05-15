import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import BackgroundPage from "./Components/BackgroundPage/BackgroundPage";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div id="app">
      <BackgroundPage />
    </div>
  );
};

export default App;
