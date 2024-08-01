import React from "react";
import { useEffect, useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
    .then((response) => response.json())
    .then((json) => setData(json));    
  }, [])

  return (
    <GlobalContext.Provider value={{'data' : data, 'setData' : setData}}>
      {children}
    </GlobalContext.Provider>
  )

}