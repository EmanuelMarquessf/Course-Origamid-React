import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Product() {
  const params = useParams();

  const location = useLocation();
  const search = new URLSearchParams(location.search)
  console.log(search.get('memoria'))
  return (
    <div>Product {params.id}</div>
  )
}

export default Product