// Import the necessary dependencies
import { useContext, useEffect } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import { MyContext } from '@/context/MyContext'
import { monserrat } from '@/app/ui/fonts'
import useGetAllCharacters from '@/customHooks/useGetAllCharacters'

function Characters() {
  const { characters, page, setPage } = useContext(MyContext)
  const { getCharacters } = useGetAllCharacters()

  const handleNextPage = () => {
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
    if (page > 0 && page < 42) {
      getCharacters()
    }
  }, [page])

  return (
    <section className='text-white w-full  z-50 flex flex-col justify-center items-center'>
      <div className='flex gap-5 max-w-[300px]'>
        {' '}
        <button
          onClick={handleBackPage}
          className={`uppercase bg-blue-600 p-3 mt-20 cursor-pointer text-white rounded-[15px] max-w-[216px] max-h-[66px]  text-[11px] font-bold z-50 ${monserrat.classname} cursor-pointer m-auto `}>
          Página anterior
        </button>
        <button
          onClick={handleNextPage}
          className={`uppercase bg-blue-600 p-3 mt-20 cursor-pointer text-white rounded-[15px] max-w-[216px] max-h-[66px]  text-[11px] font-bold z-50 ${monserrat.classname} cursor-pointer m-auto `}>
          Siguiente página
        </button>
      </div>
      <div className='mt-8 flex flex-wrap gap-8 justify-center items-center z-50'>
        {characters.map((character) => (
          <div
            className='flex-col justify-center items-center z-50'
            key={character.id}>
            <CharacterCard
              image={character.image}
              name={character.name}
              origin={character.origin.name}
              species={character.species}
              characterId={character.id}
            />
          </div>
        ))}
      </div>
      <div className='flex gap-5 max-w-[350px] p-10'>
        {' '}
        <button
          onClick={handleBackPage}
          className={`uppercase bg-blue-600 p-3 mt-20 cursor-pointer text-white rounded-[15px] max-w-[216px] max-h-[66px]  text-[11px] font-bold z-50 ${monserrat.classname} cursor-pointer m-auto `}>
          Página anterior
        </button>
        <button
          onClick={handleNextPage}
          className={`uppercase bg-blue-600 p-3 mt-20 cursor-pointer text-white rounded-[15px] max-w-[216px] max-h-[66px]  text-[11px] font-bold z-50 ${monserrat.classname} cursor-pointer m-auto `}>
          Siguiente página
        </button>
      </div>
    </section>
  )
}

export default Characters
