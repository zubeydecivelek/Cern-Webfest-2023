import React from 'react';
import Tile from './Tile';
import Player from './Player';

const GameLevel = ({ levelConfiguration }) => {
  const { map, physicist, startPos, endPos } = levelConfiguration;

  // logic to render the game level based on the provided levelConfiguration

  return (
    <svg width="500" height="300">
      {/* use the map array to render the tiles.. just an example */}
      {map.map((row, rowIndex) =>
        row.map((tileValue, colIndex) => (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            size={50}
            walkable={tileValue === 1}
          />
        ))
      )}

      {/* render the player using startPos */}
      <Player
      />
    </svg>
  );
};

export default GameLevel;