import Image from 'next/image'
import React from 'react'

function CharacterCard({ image, name, origin, species }) {
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
      </div>
    </div>
  )
}

export default CharacterCard
