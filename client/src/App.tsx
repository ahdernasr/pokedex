import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import Home from "./pages/Home";
import PokemonView from "./pages/PokemonView";

loadDevMessages();
loadErrorMessages();

const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: "http://localhost:8888/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="navbar">
            <h1 className="">Pokedex</h1>
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/:id" element={<PokemonView />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
