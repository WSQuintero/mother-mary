'use client'
const { createContext, useState } = require('react')

const MyContext = createContext()

function ContextProvider({ children }) {
  const [characters, setCharacters] = useState([])

  return (
    <MyContext.Provider value={{ characters, setCharacters }}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, ContextProvider }
