import { connect } from 'react-redux';
import { requestThisPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
    items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
    requestThisPokemon: id => dispatch(requestThisPokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);