import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, counter] = useState(0);
  useEffect(() => {
    console.log("useeffect")
    const clearid=setInterval(() => {
      counter((count) => count + 1);
    }, 1000);

    return ()=>{
      console.log("cleanup function");
      clearInterval(clearid);
    }
  }, []);
  return (
    <>
      <p>{count}</p>
    </>
  );
}

export default App;
