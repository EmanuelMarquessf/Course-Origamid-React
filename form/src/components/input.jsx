import React from 'react'

function input({id, label, type, value, setValue, ...props}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={label} value={value} onChange={({target})=> setValue(target.value)} {...props}/>
    </>
  )
}

export default input