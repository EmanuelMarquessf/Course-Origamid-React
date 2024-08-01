import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function Product() {
  const global = useContext(GlobalContext);
  console.log(global);
  return <div>Product:</div>;
}

export default Product;
