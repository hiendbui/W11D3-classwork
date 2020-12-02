import React from 'react';
import PokemonIndexItem from './pokemon_index_item'

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pokemonItems:[]}
    }

    componentDidMount() {
        this.props.requestAllPokemon()
        const pokemonItems = this.props.pokemon.map((pokemon) => (
          <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
        ))
        this.setState({ pokemonItems }) 
    }
    
    
    render() {
        return (
          <div className="pokedex">
            <ul>
                {this.state.pokemonItems};
            </ul>
          </div>
        )
    }
}