import React from 'react'

function Product({data}) {
  return (
    <div>
      {data.fotos.map((foto)=>(
        <img key={foto.titulo} style={{width: '200px'}} src={foto.src} alt={foto.titulo} />
      ))}
      <div>
        <h2>{data.nome} - {data.id}</h2>
        <p>{data.descricao}</p>
        <div>Preço: {Number(data.preco).toFixed(2)}</div>
      </div>
    </div>

  )
}

export default Product