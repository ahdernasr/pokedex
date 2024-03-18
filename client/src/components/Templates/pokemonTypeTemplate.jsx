import "./Templates.css";
import { typeColors } from "../../utils/types";

// Template for the colored block that displays pokemon type visually
export const pokemonTypeTemplate = (rowData) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {rowData.type.map((type) => (
        <span
          key={type}
          style={{
            backgroundColor: typeColors[type],
          }}
          className="typeTemplateSpanner"
        >
          {type}
        </span>
      ))}
    </div>
  );
};
