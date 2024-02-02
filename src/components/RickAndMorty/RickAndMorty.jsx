'use client'
import { Button } from '@mui/material'
import Background from '../BackGround/Background'
import GeneralButton from '../GeneralButton/GeneralButton'
import useGetAllCharacters from '@/customHooks/useGetAllCharacters'
import { useContext, useEffect } from 'react'
import Characters from '../Characters/Characters'
import { MyContext } from '@/context/MyContext'

function RickAndMorty() {
  const { getCharacters } = useGetAllCharacters()
  const { characters } = useContext(MyContext)

  const handleSearchCharacters = (event) => {
    event.preventDefault()
    getCharacters()
  }

  return (
    <section className='w-[90%] min-h-[100vh] flex justify-center items-center relative flex-col'>
      <Background />
      <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center z-40'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='bg-gradient-to-r from-green-500 via-blue-500 to-purple-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
            Rick And Morty Characters
          </h2>

          <p className='mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-white'>
            Aquí conoceras todos los datos relevantes sobre los personajes más
            importantes de Rick and Morty.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <GeneralButton
              className='uppercase bg-gradient-to-b p-5 from-[#FECB48] hover:bg-red-300 to-[#b38512] rounded-[15px] max-w-[216px] max-h-[66px] text-textButtonColor text-[11px] font-bold font-monserrat'
              onClick={handleSearchCharacters}
              text='Ver todos los personajes'
            />
          </div>
        </div>
      </div>
      <section>{characters && <Characters />}</section>
    </section>
  )
}

export default RickAndMorty
