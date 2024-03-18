import { GET_POKEMON_BY_ID } from "../../api/pokemonQueries";
import PokemonStats from "../../components/PokemonStats/PokemonStats";
import PokemonPreview from "../../components/PokemonPreview/PokemonPreview";
import { ProgressSpinner } from "primereact/progressspinner";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { parseImageName } from "../../utils/parseImageName";
import "./PokemonView.css";

const PokemonView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Load pokemon value by id, using URL parameter
  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: id },
  });

  if (error || (!loading && !data.pokemon)) {
    navigate("/404");
    return <></>;
  }

  var imageName;
  // Convert name to name compatible with images DB
  if (!loading && !error && data) {
    imageName = parseImageName(data.pokemon.name);
  }

  return (
    <div className="pokemon-view">
      {loading && <ProgressSpinner />}
      {!loading && (
        <>
          <div className="viewSectionContainer">
            <PokemonPreview data={data} id={id} imageName={imageName} />
            <PokemonStats data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonView;
