import React from 'react';
import ReactDOM from 'react-dom';
// import { fetchAllPokemon } from './utils/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, rootEl);
});

// window.fetchAllPokemon = fetchAllPokemon;

