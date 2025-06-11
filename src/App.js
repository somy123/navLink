import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About";

function App() {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
