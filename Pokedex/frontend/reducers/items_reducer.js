import { RECEIVE_THIS_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state= {}, action) => {
  Object.freeze(state);
  const newState = {...state};

  switch (action.type){
    case RECEIVE_THIS_POKEMON:
      return action.pokemon.items;
    default:
      return state;
  }
}

export default itemsReducer;