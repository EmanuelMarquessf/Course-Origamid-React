import { useEffect, useState } from 'react'
import styles from './styles/Product.module.css'
import { useParams } from 'react-router-dom'
import Head from '../Components/Head';


function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {id} = useParams();

  useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json)
        console.log(response);
      } catch (erro) {
        setError(erro)
      }finally{
        setLoading(false)
      }

    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  },[id]);

  if(loading) return <p>Carregando...</p>
  if(error) return <p>{error}</p>
  if(product === null) return null;
  return (
    <section className={styles.product + " animeLeft"}>
      <Head title={`Renek - ${product.nome}`} descricao={product.nome}/>
      {product.fotos.map(foto => <img className={styles.image} key={foto.src} src={foto.src} alt={foto.titulo} />)}
      <div>
        <h1>{product.nome}</h1>
        <span>R${product.preco}</span>
        <p>{product.descricao}</p>
        <img src={product.url} alt="" />
      </div>
    </section>
  )
}

export default Product