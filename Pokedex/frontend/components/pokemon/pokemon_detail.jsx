import React from 'react';

export default class PokemonDetail extends React.Component {
    componentDidMount() {
        this.props.requestThisPokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.requestThisPokemon(this.props.match.params.pokemonId)
        }
    }

    render() {
        if (!this.props.pokemon) return null;
        
        return (
            <div className="pokemon-detail">
                <figure>
                    <img src={this.props.pokemon.imageUrl} alt={this.props.pokemon.name} />
                </figure>
                <ul>
                    <li><h2>{this.props.pokemon.name}</h2></li>
                    <li>Type: {this.props.pokemon.pokeType}</li>
                    <li>Attack: {this.props.pokemon.attack}</li>
                    <li>Defense: {this.props.pokemon.defense}</li>
                    <li>Moves: {this.props.moves.join(", ")}</li>
                </ul>

            


            </div>
        )
    }
}