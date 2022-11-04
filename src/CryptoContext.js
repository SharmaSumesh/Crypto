import React from 'react';
import { createContext } from 'react';
const crypto =  createContext;
const CryptoContext = ({children}) => {
  return (
    <Crypto.Provider>
        {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;
export const CryptoSate = ()=>
{
  return npContext(CryptoSate)
}
