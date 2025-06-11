import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const addresses = [
    { city: "mumbai", pincode: "400029", isDefault: true },
    { city: "Delhi", pincode: "400029", isDefault: false },
    { city: "Chennai", pincode: "400090", isDefault: false },
    { city: "Kolkata", pincode: "400095", isDefault: false },
  ];
  const [defaultAddress, setDefaultAddress] = useState(
    addresses.find((item) => item.isDefault === true)
  );
  const [pincode, setPinCode] = useState("");
  const onSetPinCodeClick = () => {
    const selectedAddress = addresses.find(
      (address) => address.pincode === pincode
    );
    setDefaultAddress(selectedAddress);
  };
  useEffect(() => {
    console.log("useeffect called");
  }, [defaultAddress.pincode]);
  console.log(defaultAddress);
  return (
    <div className="app">
      <h2>Dependancy Mistakes in useeffect hook</h2>
      <div>
        <input
          onChange={(e) => setPinCode(e.target.value)}
          placeholder="enter pincode"
        />
      </div>
      <div>
        <button onClick={onSetPinCodeClick}>set pincode</button>
      </div>
    </div>
  );
}

export default App;
