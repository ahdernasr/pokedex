import "./Templates.css"

export const imageBodyTemplate = (rowData) => {

    var imageName = rowData.name;
      if (rowData.name.substr(rowData.name.length - 1) === "♂") {
        imageName = imageName.slice(0, -1) + "-m";
      } else if (imageName.substr(imageName.length - 1) === "♀") {
        imageName = imageName.slice(0, -1) + "-f";
      } else {
        imageName = imageName.replace(/[\s']/g, "");
        imageName = imageName.replace(/[.]/g, "-");
      }

    return <img src={`https://img.pokemondb.net/artwork/${imageName.toLowerCase()}.jpg`} alt={rowData.name} className="imageTemplate" />;
};