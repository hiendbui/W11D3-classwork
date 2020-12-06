import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {selectPokemonMovesNames} from './reducers/selectors'
import {fetchThisPokemon} from './utils/api_util'
import {requestThisPokemon} from './actions/pokemon_actions'
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store
  window.selectPokemonMovesNames = selectPokemonMovesNames;
  window.fetchThisPokemon = fetchThisPokemon;
  window.requestThisPokemon = requestThisPokemon;
  ReactDOM.render(<Root store={store} />, rootEl);
});

