import { gql } from "@apollo/client";

// Get all pokemens - returns array of pokemon objects.
const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons {
      id
      name
      type
      base {
        HP
        Attack
        Defense
        SpAttack
        SpDefense
        Speed
      }
    }
  }
`;

// Get pokemon by id - returns single pokemon object.
const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: String!) {
    pokemon(id: $id) {
      id
      name
      type
      base {
        HP
        Attack
        Defense
        SpAttack
        SpDefense
        Speed
      }
    }
  }
`;

export { GET_POKEMONS, GET_POKEMON_BY_ID };
