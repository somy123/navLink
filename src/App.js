import "./App.css";
import { Link,useNavigate, NavLink, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About";

function App() {
  const getStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      textDecoration: "none",
    };
  };
  return (
    <div className="app">
      <NavLink style={getStyles} to="/">
        Home
      </NavLink>
      <NavLink style={getStyles} to="/cart">
        Cart
      </NavLink>
      <NavLink style={getStyles} to="/about">
        About
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
