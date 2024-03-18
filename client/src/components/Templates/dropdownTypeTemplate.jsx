import "./Templates.css"
import { typeColors } from "../../utils/types"

// Template for 'filter by type' dropdown
export const dropdownTypeTemplate = (option) => {
  
    const typeColor = typeColors[option.value] || '#8080FF'; // Fallback to blue if color is not available
  
    return (
      <span style={{ backgroundColor: typeColor}} className="dropdownTemplate">
        {option.label}
      </span>
    );
  };
  