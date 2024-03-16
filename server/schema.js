const pokemonData = require("./data/pokemon.json");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

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
    pokemon: {
      type: PokemonType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args, context, info) {
        return pokemonData[args.id];
      },
    },
    pokemons: {
      type: GraphQLList(PokemonType),
      resolve(parent, args, context, info) {
        return pokemonData.map(mapPokemonBaseStats);
      },
    },
  },
});

function mapPokemonBaseStats(pokemon) {
  if (!pokemon) return null;
  return {
    ...pokemon,
    base: {
      HP: pokemon.base.HP,
      Attack: pokemon.base.Attack,
      Defense: pokemon.base.Defense,
      SpAttack: pokemon.base['Sp. Attack'],
      SpDefense: pokemon.base['Sp. Defense'],
      Speed: pokemon.base.Speed,
    },
  };
}

module.exports = new GraphQLSchema({
  query: RootQuery,
});
