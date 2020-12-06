import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li key={pokemon.id} className="pokemon-index-item">
        <Link to={`/pokemon/${pokemon.id}`}>
            {pokemon.name}
            <br/>
            <img src={pokemon.imageUrl} alt=""/>
        </Link>
    </li>
  )
}

export default PokemonIndexItem;
