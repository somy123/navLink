import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let values = {
  email: "",
  name: "",
  phone: "",
  address: "",
};

function App() {
  let [value, setValue] = useState(values);

  // let admin=true;
  // let arr =[{id:1,name:'somya'},{id:2,name:'mishra'},{id:3,name:'ishan'}]
  const setName = (event) => {
    setValue({ ...value, name: event.target.value });
  };
  const setEmail = (event) => {
    setValue({ ...value, email: event.target.value });
  };
  const setPhone = (event) => {
    setValue({ ...value, phone: event.target.value });
  };
  const setAddress = (event) => {
    setValue({ ...value, address: event.target.value });
  };
  return (
    <div className="App">
      <div>
        <label>Email</label>
        <input placeholder="Enter your name" onChange={setEmail} />
        {value.email}
      </div>
      <div>
        <label>Name</label>
        <input placeholder="Enter your city" onChange={setName} />
        {value.name}
      </div>
      <div>
        <label>phone</label>
        <input placeholder="Enter your number" onChange={setPhone} />
        {value.phone}
      </div>
      <div>
        <label>address</label>
        <input placeholder="Enter" onChange={setAddress} />
        {value.address}
      </div>
    </div>
  );
}

export default App;
