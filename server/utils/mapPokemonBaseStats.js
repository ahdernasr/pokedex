// Utility function maps changes Sp Attack and Sp Defense field names for easier accessibility
function mapPokemonBaseStats(pokemon) {
  if (!pokemon) return null;
  return {
    ...pokemon,
    base: {
      ...pokemon.base,
      SpAttack: pokemon.base["Sp. Attack"],
      SpDefense: pokemon.base["Sp. Defense"],
    },
  };
}

module.exports = mapPokemonBaseStats;