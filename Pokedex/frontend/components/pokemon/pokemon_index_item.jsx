import React from 'react';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li key={pokemon.id} className="pokemon-index-item">
      {pokemon.name}
      <br/>
      <img  src={pokemon.imageUrl} alt=""/>
    </li>
  )
}

export default PokemonIndexItem;