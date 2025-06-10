import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  const callcount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("hello");
    const url = "https://dummyjson.com/products";

    getData(url);
  }, [count]);

  const getData = async (url) => {
    try {
      const {
        data: { products },
      } = await axios.get(url);
      setProducts(products);
      console.log(products);
    } catch (err) {
      return err;
    }
  };

  return (
    <>
      <button onClick={callcount}>increase</button>
      <p>{count}</p>
      {products &&
        products.length > 0 &&
        products.map((prod) => <p key={prod.id}>{prod.title}</p>)}
    </>
  );
}

export default App;
