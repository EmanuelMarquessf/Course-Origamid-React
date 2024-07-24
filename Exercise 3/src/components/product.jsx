import React from 'react'
import Title from '../components/title'

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function product() {
  return (
    <>
      <Title>PRODUTOS</Title>
      {produtos.map(({nome, propriedades}) => (
        <div key={nome} style={{border: '1px black solid'}}>
          <ul>
            {nome}
            {propriedades.map((propriedade, index) => (
              <li key={index}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default product