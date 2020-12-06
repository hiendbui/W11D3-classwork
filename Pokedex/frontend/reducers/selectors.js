export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemonMovesNames = (state) => {
  const movesNames = [];
  const moves = Object.values(state.entities.moves)
  moves.forEach(move => {movesNames.push(move.name)});
  return movesNames;
}
