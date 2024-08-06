import { useState } from 'react'

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

function App() {

  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  const [response, setResponse] = useState(null)

  function handleSubmit(event){
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      console.log(response)
      setResponse(response)
    });
  }

  function handleChange({ target }){
    const { id, value } = target;
    setForm({...form, [id]: value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map(({id, label, type}) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={form[id]} onChange={handleChange}/>
          </div>
        ))}
        <button>Enviar</button>
      </form>

      {response && response.status == 200 ? (
        <span>Dados Enviados!!</span>
      ) : response ? (
        <span>Erro no envio dos dados</span>
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default App
