"use client";
import { MyContext } from "@/context/MyContext";
import { monserrat } from "@/app/ui/fonts";
import Image from "next/image";
import React, { useContext } from "react";

function CharacterCard({ image, name, origin, species, characterId }) {
  const { characters, setCharacters } = useContext(MyContext);

  const handleClick = (event) => {
    event.preventDefault();
    const filteredCharacters = characters?.filter(
      (charac) => charac?.id !== characterId,
    );
    setCharacters(filteredCharacters);
  };

  return (
    <article
      href="#"
      className="group relative block w-[300px] h-[300px] rounded-2xl"
    >
      <Image
        alt="name"
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
        width={300}
        height={300}
      />

      <div className=" p-4 sm:p-6 lg:p-8 h-full relative">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-300 px-2 bg-black/50 w-full ">
          {species}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>
        <p>{origin}</p>
        <button
          onClick={handleClick}
          data-id={characterId}
          className={`uppercase absolute bottom-1 bg-gradient-to-b p-3 mt-10 from-[#FECB48] hover:bg-red-300 to-[#b38512] rounded-[15px] max-w-[216px] max-h-[66px] text-textbuttonColor text-[11px] font-bold  ${monserrat.classname} cursor-pointer z-50`}
        >
          Borrar personaje
        </button>
      </div>
    </article>
  );
}

export default CharacterCard;
