import {useState, useEffect} from 'react'

function Product({product}) {
  const [data, setData] = useState(null)

  useEffect(() => {
    if(product){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    }
  }, [product]);

  if (data === null) return <span>Nothing there</span>;
  return (
    <div>
      <h1>{data.nome}</h1>
      <span>R$ {data.preco}</span>
    </div>
  );
}

export default Product