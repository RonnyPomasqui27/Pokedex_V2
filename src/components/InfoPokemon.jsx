import React from 'react';

const InfoPokemon = ({pokemons}) => {
  console.log(pokemons)

  return (
    <div className='info_pokemon_card'>
      <img src={pokemons.sprites?.other.dream_world.front_default}/>
      <div className="text_pke">
        <h3>Peso: {pokemons.weight}kg.</h3>
        <h3>Altura: {pokemons.height}0cm.</h3>
        <h3>Habilidades: </h3>
        <p>{pokemons.abilities?.[0]?.ability.name}</p>
        <p>{pokemons.abilities?.[1]?.ability.name}</p>
        <p>{pokemons.abilities?.[2]?.ability.name}</p>
        <p>{pokemons.abilities?.[3]?.ability.name}</p>
        <h3>Tipo: {pokemons.types?.[0].type.name}.</h3>
      </div>
      
    </div>
  );
};

export default InfoPokemon;