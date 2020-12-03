
import { RECEIVE_ALL_POKEMON, RECEIVE_THIS_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {...state};
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon;
        case RECEIVE_THIS_POKEMON:
            newState[action.pokemon.id] = action.pokemon
            return newState;
        default:
            return state;
    }
}

export default pokemonReducer;

