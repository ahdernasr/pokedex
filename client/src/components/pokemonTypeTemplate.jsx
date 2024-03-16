export const pokemonTypeTemplate = (rowData) => {

    const typeColors = {
        Normal: '#A8A77A', // Greyish
        Fire: '#EE8130', // Bold Orange
        Water: '#6390F0', // Bright Blue
        Electric: '#F7D02C', // Electric Yellow
        Grass: '#7AC74C', // Bright Green
        Ice: '#96D9D6', // Light Cyan
        Fighting: '#C22E28', // Deep Red
        Poison: '#A33EA1', // Dark Purple
        Ground: '#E2BF65', // Earthy Gold
        Flying: '#A98FF3', // Lavender
        Psychic: '#F95587', // Bold Pink
        Bug: '#A6B91A', // Lime Green
        Rock: '#B6A136', // Rocky Gold
        Ghost: '#735797', // Muted Purple
        Dragon: '#6F35FC', // Royal Blue
        Dark: '#705746', // Dark Brown
        Steel: '#B7B7CE', // Metallic Gray
        Fairy: '#D685AD', // Soft Pink
      };

      
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        {rowData.type.map((type) => (
          <span key={type} style={{
            backgroundColor: typeColors[type],
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '0.8rem',
          }}>
            {type}
          </span>
        ))}
      </div>
    );
  };