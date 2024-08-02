import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

function Product() {
  const global = useContext(GlobalContext);
  const [delayedData, setDelayedData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(global.data);
    }, 2000);

    return () => clearTimeout(timer);
  }, [global.data]);

  if (!global || !global.data || !delayedData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {delayedData.map((product) => (
        <p key={product.id}>{product.id}</p>
      ))}
    </div>
  );
}

export default Product;