import PokemonTable from "../components/PokemonTable/PokemonTable";
import { ProgressSpinner } from "primereact/progressspinner";
import { GET_POKEMONS } from "../queries/pokemonQueries";
import { useQuery } from "@apollo/client";

const Home = () => {

  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div className="home">
      {loading && <ProgressSpinner />}
      {!loading &&  <PokemonTable data={data} />}
    </div>
  );
};

export default Home;
