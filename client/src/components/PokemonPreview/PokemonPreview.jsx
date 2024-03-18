import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import "./PokemonPreview.css";

const PokemonPreview = ({ data, id, imageName }) => {
  const navigate = useNavigate();

  return (
    <div
      className="fadeInAnimation viewSection"
      style={{ animationDuration: "0.35s", animationDelay: "0.05s" }}
    >
      <div className="viewHeader">
        {data.pokemon.name} - {id}
      </div>
      <img
        src={`https://img.pokemondb.net/artwork/${imageName.toLowerCase()}.jpg`}
        alt={data.pokemon.name}
        className="viewImage"
      />
      <div className="viewButtonContainer">
        <Button
          className="viewButton"
          onClick={() => {
            navigate(`/pokemon/${id > 1 ? parseInt(id) - 1 : id}`); // Next pokemon
          }}
        >
          Prev
        </Button>
        <Button
          className="viewButton"
          onClick={() => {
            navigate(`/pokemon/${id < 809 ? parseInt(id) + 1 : id}`); // Previous pokemon
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PokemonPreview;
