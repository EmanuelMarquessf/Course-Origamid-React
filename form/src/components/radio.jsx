import React from 'react'

function radio({options, value, setValue, ...props}) {
  return (
    <>
    {options.map((opt => (
      <label key={opt}>
        <input 
          type="radio"
          value={opt}
          checked={value===opt}
          onChange={({target}) => setValue(target.value)}
          {...props} 
        />
        {opt}
      </label>
    )))}
    </>
  )
}

export default radio