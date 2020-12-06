import { connect } from 'react-redux';
import { requestThisPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectPokemonMovesNames } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    moves: selectPokemonMovesNames(state),
    items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
    requestThisPokemon: id => dispatch(requestThisPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);