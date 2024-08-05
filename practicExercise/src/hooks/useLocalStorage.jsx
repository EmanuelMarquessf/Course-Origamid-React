import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, inicial) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key)
    if (local) {
      return JSON.parse(local);
    } else {
      return inicial;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;