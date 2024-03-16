import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import PokemonTable from "./components/PokemonTable";

loadDevMessages();
loadErrorMessages();

const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache,
});


function App() {
  return (
    <div className="main">
      <ApolloProvider client={client}>
        <div className="navbar">
          <h1 className="">Pokedex</h1>
        </div>
        <div className="tableContainer">
          <PokemonTable />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
