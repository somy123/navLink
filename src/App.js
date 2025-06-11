import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useReducer } from "react";

function App() {
  const initialState = {
    count: 0,
  };
  const reducerFun = (state, action) => {
    if (action.type === "INCREMENT") {
      return {
        state,
        count: state.count + 1,
      };
    }
    if (action.type === "DECREMENT") {
      return {
        state,
        count: state.count - 1,
      };
    }
    console.log(state, action);
  };
  const [state, dispatch] = useReducer(reducerFun, initialState);
  console.log(state);
  return (
    <div className="app">
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;
