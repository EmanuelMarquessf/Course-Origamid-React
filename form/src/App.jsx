import { useState } from "react";
import Input from "./components/input";
import InputBlur from "./components/inputBlur";
import Select from "./components/select";
import Radio from "./components/radio";
import Checkbox from "./components/checkbox";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [color, setColor] = useState("");
  const [fruit, setFruit] = useState([]);
  const [terms, setTerms] = useState([]);
  const [cep, setCep] = useState('');

  const [error, setError] = useState(null);


  function validateCep(value){
    if(value.lenght === 0){
      setError('Preencha um valor')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP valido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({target}){
    validateCep(target.value);
  }

  function handleChange({target}){
    if(error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px'}}>
      <Input
        id="name"
        label="Name"
        type="text"
        value={name}
        setValue={setName}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        setValue={setEmail}
      />
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={product}
        setValue={setProduct}
      />

      <Radio
        options={["Blue", "Red", "Yellow"]}
        value={color}
        setValue={setColor}
      />

      <Checkbox
        options={["Uva", "Laranja", "Limão"]}
        value={fruit}
        setValue={setFruit}
      />

      <Checkbox
        options={["Termos e Condições"]}
        value={terms}
        setValue={setTerms}
      />

      <InputBlur id="cep" label="CEP" value={cep} setValue={setCep} onBlur={handleBlur} onChange={handleChange} placeHolder="00000-000" />
      {error}

      <button>Enviar</button>
    </form>
  );
}

export default App;
