import React from 'react';
import PokemonIndexItem from './pokemon_index_item'

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pokemonItems:[]}
    }

    componentDidMount() {
        this.props.requestAllPokemon()
    }
    
    
    render() {
        const pokemonItems = this.props.pokemon.map((pokemon) => (
            <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
        ))
        return (
          <div className="pokedex">
            <ul>
                {pokemonItems};
            </ul>
          </div>
        )
    }
}