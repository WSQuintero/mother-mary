import CharacterCard from '../CharacterCard/CharacterCard'
import GeneralButton from '../GeneralButton/GeneralButton'

function Characters({ characters, setCharacters }) {
  return (
    <section class=' text-white w-full'>
      <div className='mt-8 flex flex-wrap gap-8 justify-center items-center'>
        {characters.map((character) => (
          <div
            className='flex-col justify-center items-center'
            key={character.id}>
            <CharacterCard
              image={character.image}
              name={character.name}
              origin={character.origin.name}
              species={character.species}
            />
            <GeneralButton text='Borrar personaje' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Characters
