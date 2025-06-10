import logo from "./logo.svg";
import "./App.css";
import { useRef ,forwardRef} from "react";
const MyButton = forwardRef( (props,ref) => {
  console.log(props);
  return <input  ref={ref} placeholder="search..." />;
});

function App() {
  const inputRef = useRef();
  const onFocusClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyButton placeholder="search...." ref={inputRef} />
      <button onClick={onFocusClick}>Focus on Input</button>
    </div>
  );
}

export default App;
