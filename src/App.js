import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const allBrands = [
  { id: "1", brandName: "puma",count:0 },
  { id: "2", brandName: "adiddas",count:0 },
  { id: "3", brandName: "nike", count:0},
  { id: "4", brandName: "reebok", count:0},
  { id: "5", brandName: "asian", count:0},
];

function App() {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const addToCartClicked = (id) => {
    console.log("clicked", id);
    const selecteditem = allBrands.find((item) => item.id === id);
    setSelectedBrand([...selectedBrand, selecteditem]);
  };
  const onRemoveClicked = (id) => {
    const filteredItems = selectedBrand.filter((item) => item.id !== id);
    setSelectedBrand(filteredItems);
  };
  return (
    <>
      <div>
        {allBrands.map((brand) => (
          <div key={brand.id}>
            <span>{brand.brandName}</span>
            <button onClick={() => addToCartClicked(brand.id)}>
              Addtocart
            </button>
          </div>
        ))}
      </div>
      <div>
        <p>Your cart</p>
        {selectedBrand &&
          selectedBrand.map((brand) => (
            <>
              <p key={brand.id}>{brand.brandName}</p>
              <button onClick={() => onRemoveClicked(brand.id)}>remove</button>
            </>
          ))}
      </div>
    </>
  );
}

export default App;
