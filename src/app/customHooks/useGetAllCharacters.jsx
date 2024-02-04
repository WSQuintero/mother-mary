import { MyContext } from '@/app/context/MyContext'
import { useContext } from 'react'

function useGetAllCharacters() {
  const { setCharacters, page } = useContext(MyContext)

  const getCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
  }

  return { getCharacters }
}

export default useGetAllCharacters
