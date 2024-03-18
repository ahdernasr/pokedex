import { typeColors } from "../../utils/types";
import "./PokemonStats.css";

const PokemonStats = ({ data }) => {
  return (
    <div className="viewSection">
      <div
        className="statTypeContainer fadeInLeftAnimation"
        style={{ animationDuration: "1s", animationDelay: "0.05s" }}
      >
        {data.pokemon.type.map((type) => (
          <span
            key={type}
            style={{
              backgroundColor: typeColors[type], // Load type background color based on type
              margin: "3px",
            }}
            className="statType"
          >
            {type}
          </span>
        ))}
      </div>
      <div
        className="stat fadeInAnimation"
        style={{ animationDuration: "0.35s", animationDelay: "0.15s" }}
      >
        <p className="stat-header">HP</p>
        <progress value={data.pokemon.base.HP} max="255" />
        <p className="stat-value">{data.pokemon.base.HP}</p>
      </div>
      <div
        className="stat fadeInAnimation"
        style={{ animationDuration: "0.35s", animationDelay: "0.25s" }}
      >
        <p className="stat-header">Attack</p>
        <progress value={data.pokemon.base.Attack} max="190" />
        <p className="stat-value">{data.pokemon.base.Attack}</p>
      </div>
      <div
        className="stat fadeInAnimation"
        style={{ animationDuration: "0.35s", animationDelay: "0.35s" }}
      >
        <p className="stat-header">Defense</p>
        <progress value={data.pokemon.base.Defense} max="250" />
        <p className="stat-value">{data.pokemon.base.Defense}</p>
      </div>
      <div
        className="stat fadeInAnimation"
        style={{ animationDuration: "0.35s", animationDelay: "0.45s" }}
      >
        <p className="stat-header">Sp. Attack</p>
        <progress value={data.pokemon.base.SpAttack} max="194" />
        <p className="stat-value">{data.pokemon.base.SpAttack}</p>
      </div>
      <div
        className="stat fadeInAnimation"
        style={{ animationDuration: "0.35s", animationDelay: "0.55s" }}
      >
        <p className="stat-header">Sp. Defense</p>
        <progress value={data.pokemon.base.SpDefense} max="250" />
        <p className="stat-value">{data.pokemon.base.SpDefense}</p>
      </div>
      <div
        className="stat fadeInAnimation"
        style={{ animationDuration: "0.35s", animationDelay: "0.65s" }}
      >
        <p className="stat-header">Speed</p>
        <progress value={data.pokemon.base.Speed} max="250" />
        <p className="stat-value">{data.pokemon.base.Speed}</p>
      </div>
      <div
        className="stat fadeInAnimation total"
        style={{ animationDuration: "0.35s", animationDelay: "0.75s" }}
      >
        <p className="stat-header total">Total</p>
        {/* Calculates the sum of all base attributes */}
        <progress
          className="total"
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
        <p className="stat-value total">
          {data.pokemon.base.Speed +
            data.pokemon.base.SpDefense +
            data.pokemon.base.SpAttack +
            data.pokemon.base.Defense +
            data.pokemon.base.Attack +
            data.pokemon.base.HP}
        </p>
      </div>
    </div>
  );
};

export default PokemonStats;
