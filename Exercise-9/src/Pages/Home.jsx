import React, { useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import { Link } from "react-router-dom";
import Head from "../Components/Head";

function Home() {
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProducts(json));
  }, []);

  if ((products == null)) return null;
  return (
    <section className={styles.home + " animeLeft"}>
      <Head title={`Renek`} descricao='Renek'/>
      {products.map((product) => (
        <Link to={`product/${product.id}`} key={product.id}>
          <img className={styles.img} src={product.fotos[0].src} alt={product.fotos[0].titulo} />
          <h1 className={styles.name}>{product.nome}</h1>
        </Link>
      ))}
    </section>
  );
}

export default Home;
