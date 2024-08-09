import React from "react";

function select({ options, value, setValue, ...props }) {
  return (
    <select
      value={value}
      onChange={({target}) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>Select</option>
      {options.map((op) => (
        <option key={op} value={op}>{op}</option>
      ))}
    </select>
  );
}

export default select;
