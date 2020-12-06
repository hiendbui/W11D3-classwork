import React from 'react';
import PokemonIndexItem from './pokemon_index_item'
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';


export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pokemonItems:[]}
    }

    componentDidMount() {
        this.props.requestAllPokemon()
    }
    
    
    render() {
        return (
          <div className="pokedex">
            <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
            <ul>
                {this.props.pokemon.map((pokemon) => (
                    <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>))
                }
            </ul>
          </div>
        )
    }
}