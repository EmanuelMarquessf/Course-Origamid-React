import React from 'react'

function inputBlur({id, label, placeHolder, type, value, setValue, onBlur, onChange, ...props}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeHolder} value={value} onBlur={onBlur} onChange={onChange} {...props}/>
    </>
  )
}

export default inputBlur