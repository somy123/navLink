import logo from "./logo.svg";
import "./App.css";
import { v4 as uuid } from "uuid";
import { useRef, useState } from "react";

function App() {
  const timeref = useRef("somya");
  const [count, setCount] = useState(0);
  //let timer = "";
  console.log("before settimeout", timeref.current);
  const buttonClicked = () => {
    console.log(timeref.current);
    timeref.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("after setTime out", timeref.current);
  };
  const stopClicked = () => {
    console.log("last", timeref.current);
    clearInterval(timeref.current);
  };

  return (
    <div className="app">
      <p>{count}</p>
      <button onClick={buttonClicked}>count</button>
      <button onClick={stopClicked}>stop</button>
    </div>
  );
}

export default App;
