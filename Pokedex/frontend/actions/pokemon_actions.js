import * as APIUtil from '../utils/api_util';
export const RECEIVE_THIS_POKEMON = "RECEIVE_THIS_POKEMON";
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const receiveThisPokemon = (pokemon) => ({
    type: RECEIVE_THIS_POKEMON,
    pokemon
});  

export const requestAllPokemon = () => (dispatch) => {
    return APIUtil.fetchAllPokemon()
        .then(pokemon => {dispatch(receiveAllPokemon(pokemon))})
};

export const requestThisPokemon = (id) => (dispatch) => {
    return APIUtil.fetchThisPokemon(id)
        .then(payload => {dispatch(receiveThisPokemon(payload))})
}
 