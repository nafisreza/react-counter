import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    setCounter(counter + 1);
  };
  const decreaseValue = () => {
    setCounter(counter - 1);
  };


  return (
    <>
      <div className="card">
        <h2>React Counter</h2>
        <p>
          In this project, we are going to learn how to use hooks and propagate
          state changes.
        </p>
        <h1>Counter: {counter}</h1>
        <button className="draw-border" onClick={increaseValue}>Increase</button>
        <button className="draw-border" onClick={decreaseValue}>Decrease</button>
      </div>
    </>
  );
}

export default App;
