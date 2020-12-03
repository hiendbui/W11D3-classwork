import { connect } from 'react-redux';
import { requestThisPokemon } from '../../actions/pokemon_actions';
// import PokemonDetails from './pokemon_details'
const mapStateToProps = state => ({
    pokemonId: state.entities.pokemon.id,
    items: Object.values(state.entities.items)
});

const mapDispatchToProps = dispatch => ({
    requestThisPokemon: id => dispatch(requestThisPokemon(id))
});

// export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);