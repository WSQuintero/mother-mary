"use client";

import { createContext, useState } from "react";

const MyContext = createContext();

function ContextProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);

  return (
    <MyContext.Provider value={{ characters, setCharacters, page, setPage }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, ContextProvider };
