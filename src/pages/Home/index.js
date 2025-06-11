import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate =useNavigate();
    const clicked =()=>{
    navigate('/cart')
  }
    return (
    <>
      <h1>this is home page</h1>
      <button onClick={clicked}>Go to Cart</button>
    </>
  );
};
