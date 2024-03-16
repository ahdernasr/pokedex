import { gql } from "@apollo/client";

const GET_POKEMON = gql`
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

export { GET_POKEMON };
