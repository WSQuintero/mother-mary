import { useContext, useEffect } from 'react'
import useGetAllCharacters from './useGetAllCharacters'
import { MyContext } from '@/app/context/MyContext'

function useChangePage() {
  const { getCharacters } = useGetAllCharacters()
  const { page, setPage } = useContext(MyContext)

  const handleNextPage = () => {
    if (page === 0) {
      setPage(1)
    }
    if (page < 42) {
      setPage((prev) => prev + 1)
    }
  }

  const handleBackPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [page])

  return { handleNextPage, handleBackPage }
}

export default useChangePage
