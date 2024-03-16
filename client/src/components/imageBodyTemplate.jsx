
export const imageBodyTemplate = (rowData) => {
    return <img src={`https://img.pokemondb.net/artwork/${rowData.name.toLowerCase()}.jpg`} alt={rowData.name} className="w-20 shadow-2 border-round" />;
};