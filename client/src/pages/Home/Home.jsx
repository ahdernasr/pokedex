import PokemonTable from "../../components/PokemonTable/PokemonTable";
import { ProgressSpinner } from "primereact/progressspinner";
import { GET_POKEMONS } from "../../api/pokemonQueries";
import { useQuery } from "@apollo/client";
import "./Home.css";

const Home = () => {
  // Get all available pokemons
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div className="home">
      {loading && <ProgressSpinner />}
      {!loading && <PokemonTable data={data} />}
    </div>
  );
};

export default Home;
