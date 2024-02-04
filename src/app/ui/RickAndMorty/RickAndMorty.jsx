'use client'
import Background from '../BackGround/Background'
import useGetAllCharacters from '@/customHooks/useGetAllCharacters'
import { useContext } from 'react'
import Characters from '../Characters/Characters'
import { MyContext } from '@/context/MyContext'
import { monserrat } from '@/app/ui/fonts'

function RickAndMorty() {
  const { getCharacters } = useGetAllCharacters()
  const { characters, page } = useContext(MyContext)

  const handleSearchCharacters = (event) => {
    event.preventDefault()
    getCharacters(page)
  }

  return (
    <section className='w-[90%] min-h-[60vh] flex justify-center items-center relative flex-col'>
      <Background />
      <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center z-50'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='bg-gradient-to-r from-green-500 via-blue-500 to-purple-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            Rick And Morty Characters
          </h2>

          <p className='mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white'>
            Aquí conoceras todos los datos relevantes sobre los personajes más
            importantes de Rick and Morty.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <button
              className={`${monserrat.classname} uppercase bg-gradient-to-b p-2 from-[#FECB48] hover:bg-red-300 to-[#b38512] rounded-[15px] max-w-[216px] max-h-[66px] text-textbuttonColor text-[8px] font-bold `}
              onClick={handleSearchCharacters}>
              Ver todos los personajes
            </button>
          </div>
        </div>
      </div>
      <section className='z-50'>{characters.length && <Characters />}</section>
    </section>
  )
}

export default RickAndMorty
