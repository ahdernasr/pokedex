const pokemonData = require("../data/pokemon.json");
const mapPokemonBaseStats = require("../utils/mapPokemonBaseStats")

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

// 'pokemon.base' type, used inside the PokemonType
const BaseStatsType = new GraphQLObjectType({
  name: "BaseStats",
  fields: () => ({
    HP: { type: GraphQLNonNull(GraphQLInt) },
    Attack: { type: GraphQLNonNull(GraphQLInt) },
    Defense: { type: GraphQLNonNull(GraphQLInt) },
    SpAttack: { type: GraphQLNonNull(GraphQLInt) },
    SpDefense: { type: GraphQLNonNull(GraphQLInt) },
    Speed: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

// 'pokemon' type
const PokemonType = new GraphQLObjectType({
  name: "Pokemon",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    name: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (parent) => parent.name.english,
    },
    type: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
    base: { type: GraphQLNonNull(BaseStatsType) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Get a single pokemon by id
    pokemon: { 
      type: PokemonType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args, context, info) {
        return pokemonData.map(mapPokemonBaseStats)[args.id-1];
      },
    },
    // Get array of all pokemons, no args required
    pokemons: {
      type: GraphQLList(PokemonType),
      resolve(parent, args, context, info) {
        return pokemonData.map(mapPokemonBaseStats);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
