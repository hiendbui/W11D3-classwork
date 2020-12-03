import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './utils/api_util';
import { receiveAllPokemon, requestAllPokemon, requestThisPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors'
import Root from './components/root'


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.requestThisPokemon = requestThisPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, rootEl);
});

