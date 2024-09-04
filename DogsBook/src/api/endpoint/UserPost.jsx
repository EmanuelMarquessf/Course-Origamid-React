import React, { useState } from 'react'

function UserPost() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event){
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    }).then(response => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='username' type="text" value={username} onChange={({target}) => setUsername(target.value)}/>
      <input placeholder='password' type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
      <input placeholder='email' type="email" value={email} onChange={({target}) => setEmail(target.value)}/>
      <button>Enviar</button>
    </form>
  )
}

export default UserPost