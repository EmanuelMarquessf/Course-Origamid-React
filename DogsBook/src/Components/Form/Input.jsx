import React from 'react'
import styles from './Input.module.css'

function Input({label, type, name, value, onChange, error, onBlur}) {
  return (
    <div className='styles.wrapper'>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input name={name} className={styles.input} type={type} onBlur={onBlur} onChange={onChange} value={value}/>
      {error && (<p className={styles.error}>{error}</p>)}
    </div>
  )
}

export default Input