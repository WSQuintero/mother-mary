'use client'
import { useContext } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import { MyContext } from '@/context/MyContext'

function Characters() {
  const { characters } = useContext(MyContext)

  return (
    <section className=' text-white w-full z-50'>
      <div className='mt-8 flex flex-wrap gap-8 justify-center items-center z-50'>
        {characters?.map((character) => (
          <div
            className='flex-col justify-center items-center '
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
    </section>
  )
}

export default Characters
