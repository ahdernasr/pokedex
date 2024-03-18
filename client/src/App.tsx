import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonView from "./pages/PokemonView";
import NotFound from "./pages/NotFound";
import Navbar from "./pages/Navbar";


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
         <Navbar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/:id" element={<PokemonView />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
