'use client'
import { MyContext } from '@/context/MyContext'
import Image from 'next/image'
import React, { useContext, useEffect, useRef } from 'react'

function CharacterCard({ image, name, origin, species, characterId }) {
  const button = useRef(null)
  const { characters, setCharacters } = useContext(MyContext)

  const handleClick = (event) => {
    event.preventDefault()
    console.log(characters)
    const filteredCharacters = characters?.filter(
      (charac) => charac?.id !== characterId
    )
    console.log(filteredCharacters)
    setCharacters(filteredCharacters)
  }

  useEffect(() => {
    console.log(characters)
  }, [characters])
  return (
    <div href='#' className='group relative block w-[300px] h-[300px]'>
      <Image
        alt='name'
        src={image}
        className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
        width={300}
        height={300}
      />

      <div className='relative p-4 sm:p-6 lg:p-8'>
        <p className='text-sm font-bold uppercase tracking-widest text-pink-900 '>
          {species}
        </p>

        <p className='text-xl font-bold text-white sm:text-2xl'>{name}</p>
        <p>{origin}</p>
        <button
          onClick={handleClick}
          data-id={characterId}
          ref={button}
          className='uppercase bg-gradient-to-b p-3 mt-10 from-[#FECB48] hover:bg-red-300 to-[#b38512] rounded-[15px] max-w-[216px] max-h-[66px] text-textButtonColor text-[11px] font-bold font-monserrat cursor-pointer z-50'>
          Borrar personaje
        </button>
      </div>
    </div>
  )
}

export default CharacterCard
