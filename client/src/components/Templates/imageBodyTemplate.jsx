import { parseImageName } from "../../utils/parseImageName";
import "./Templates.css"

// Template for pokemon image in the data table
export const imageBodyTemplate = (rowData) => {

    var imageName = parseImageName(rowData.name) // Parse image to compatible format

    return <img src={`https://img.pokemondb.net/artwork/${imageName.toLowerCase()}.jpg`} alt={rowData.name} className="imageTemplate" />;
};