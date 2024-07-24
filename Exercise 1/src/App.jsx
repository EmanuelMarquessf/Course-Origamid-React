import { useState } from 'react'

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const total = 0;
  const dados = [{...luana, total}, {...mario, total}];
  return (
    <div style={{display: 'flex', justifyContent: 'center'}} >
      {dados.map(cliente =>(
        <div style={{padding:'2rem', border: 'black solid 1px'}} key={cliente.cliente}>
          <p>Nome: {cliente.cliente}</p>
          <p>Idade: {cliente.idade}</p>
          <ul>
            <h3>Compras</h3>
            {cliente.compras.map(compra => (
              <li key={compra.nome}>{compra.nome} - {compra.preco}</li>
            ))}
          </ul>
          <p>Total gasto: R$ {(cliente.compras.map((compra) => Number(compra.preco.replace('R$ ', ''))).reduce((a, b) => a + b)).toFixed(2)}
          <span>{(cliente.compras.map((compra) => Number(compra.preco.replace('R$ ', ''))).reduce((a, b) => a + b)) > 10000 && ' (Gastos Elevados)'}</span>
          </p>
          <p>Situação: <span style={{ color: cliente.ativa ? 'green' : 'red'}}>{cliente.ativa ? 'Ativo' : 'Inativo'}</span></p>
        </div>
      ))
      }
    </div>
  )
}

export default App
