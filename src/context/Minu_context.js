import React, { createContext, useContext, useState } from 'react'
export const Minu=createContext("")
export default function Minu_context({children}) {
  const [IsOpen,setIsOpen]=useState(true)
  return (
    <Minu.Provider value={{IsOpen,setIsOpen}}>{children}</Minu.Provider>
  )
}
