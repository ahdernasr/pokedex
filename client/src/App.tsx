import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "./queries/pokemonQueries";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import PokemonTable from "./components/PokemonTable";

loadDevMessages();
loadErrorMessages();

const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache,
});

interface Pokemon {
  id: string;
  name: {
    english: string;
  };
}

function PokemonList() {
  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="h-1/6 p-5 bg-green-200">
        <h1 className="underline">Pokémon List</h1>
      </div>
      <div className="overflow-scroll w-100 p-5 flex justify-center items-center bg-red-500">
        <PokemonTable />
      </div>
    </ApolloProvider>
  );
}

export default App;
