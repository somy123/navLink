import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const allBrands = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "adiddas" },
  { id: "3", brandName: "nike" },
  { id: "4", brandName: "reebok" },
  { id: "5", brandName: "asian" },
];

function App() {
  const [brands, setBrands] = useState(allBrands);
  const onseachchange = (e) => {
    const filterbrandNames =
      brands.length > 0
        ? brands.filter((brand) =>
            brand.brandName.includes(e.target.value.toLowerCase())
          )
        : allBrands;
    setBrands(filterbrandNames);
  };
  return (
    <>
      <input onChange={onseachchange} placeholder="Search a brand" />
      {brands.map((brand) => {
        return <li key={brand.id}>{brand.brandName}</li>;
      })}
    </>
  );
}

export default App;
