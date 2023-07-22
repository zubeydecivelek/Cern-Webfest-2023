import React from 'react';
import Tile from './Tile';
import Player from './Player';
import TileMap from './TileMap';

const GameLevel = ({ levelConfiguration, tileMap, character }) => {
  const { map, physicist, startPos, endPos } = levelConfiguration;

  // logic to render the game level based on the provided levelConfiguration

  return (
    <svg width="500" height="300">
      {/* use the map array to render the tiles.. just an example */}
      <TileMap tileMap={tileMap} />

      {/* render the player using startPos */}
      <Player startPos={startPos} character={character}/>
    </svg>
  );
};

export default GameLevel;