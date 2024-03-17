import { ProgressSpinner } from "primereact/progressspinner";
import { GET_POKEMON_BY_ID } from "../queries/pokemonQueries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const PokemonView = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id: id },
  });

  if (error) return <p>{JSON.stringify(error)}</p>;

  const typeColors = {
    Normal: "#A8A77A", // Greyish
    Fire: "#EE8130", // Bold Orange
    Water: "#6390F0", // Bright Blue
    Electric: "#F7D02C", // Electric Yellow
    Grass: "#7AC74C", // Bright Green
    Ice: "#96D9D6", // Light Cyan
    Fighting: "#C22E28", // Deep Red
    Poison: "#A33EA1", // Dark Purple
    Ground: "#E2BF65", // Earthy Gold
    Flying: "#A98FF3", // Lavender
    Psychic: "#F95587", // Bold Pink
    Bug: "#A6B91A", // Lime Green
    Rock: "#B6A136", // Rocky Gold
    Ghost: "#735797", // Muted Purple
    Dragon: "#6F35FC", // Royal Blue
    Dark: "#705746", // Dark Brown
    Steel: "#B7B7CE", // Metallic Gray
    Fairy: "#D685AD", // Soft Pink
  };

  return (
    <div className="pokemonView">
      {loading && <ProgressSpinner />}
      {!loading && (
        <>
          <div className="viewSectionContainer">
            <div className="viewSection">
              <div className="viewHeader">{data.pokemon.name}</div>
              <img
                src={`https://img.pokemondb.net/artwork/${data.pokemon.name.toLowerCase()}.jpg`}
                alt={data.pokemon.name}
                className="viewImage"
              />
            </div>
            <div className="viewSection">
              <div className="stat">
                <p className="stat-header">Types:</p>
                {data.pokemon.type.map((type) => (
                  <span
                    key={type}
                    style={{
                      backgroundColor: typeColors[type],
                      margin: "3px",
                    }}
                    className="statType"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <div className="stat">
                <p className="stat-header">HP</p>
                <progress value={data.pokemon.base.HP} max="255" />
                <p className="stat-value">{data.pokemon.base.HP}</p>
              </div>
              <div className="stat">
                <p className="stat-header">Attack</p>
                <progress value={data.pokemon.base.Attack} max="190" />
                <p className="stat-value">{data.pokemon.base.Attack}</p>
              </div>
              <div className="stat">
                <p className="stat-header">Defense</p>
                <progress value={data.pokemon.base.Defense} max="250" />
                <p className="stat-value">{data.pokemon.base.Defense}</p>
              </div>
              <div className="stat">
                <p className="stat-header">Sp. Attack</p>
                <progress value={data.pokemon.base.SpAttack} max="194" />
                <p className="stat-value">{data.pokemon.base.SpAttack}</p>
              </div>
              <div className="stat">
                <p className="stat-header">Sp. Defense</p>
                <progress value={data.pokemon.base.SpDefense} max="250" />
                <p className="stat-value">{data.pokemon.base.SpDefense}</p>
              </div>
              <div className="stat">
                <p className="stat-header">Speed</p>
                <progress value={data.pokemon.base.Speed} max="250" />
                <p className="stat-value">{data.pokemon.base.Speed}</p>
              </div>
              <div className="stat">
                <p className="stat-header">Total</p>
                <progress
                  value={
                    data.pokemon.base.Speed +
                    data.pokemon.base.SpDefense +
                    data.pokemon.base.SpAttack +
                    data.pokemon.base.Defense +
                    data.pokemon.base.Attack +
                    data.pokemon.base.HP
                  }
                  max="780"
                />
                <p className="stat-value">{
                    data.pokemon.base.Speed +
                    data.pokemon.base.SpDefense +
                    data.pokemon.base.SpAttack +
                    data.pokemon.base.Defense +
                    data.pokemon.base.Attack +
                    data.pokemon.base.HP
                  }</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonView;
