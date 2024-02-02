import { useState } from 'react'

function useGetAllCharacters() {
  const [characters, setCharacters] = useState([])

  const getCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data))
  }

  return { characters, getCharacters, setCharacters }
}

export default useGetAllCharacters
