import { MyContext } from '@/context/MyContext'
import { useContext } from 'react'

function useGetAllCharacters() {
  const { setCharacters } = useContext(MyContext)

  const getCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
  }

  return { getCharacters }
}

export default useGetAllCharacters
