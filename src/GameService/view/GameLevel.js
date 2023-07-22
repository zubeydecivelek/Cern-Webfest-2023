import React, { useRef } from 'react';
import Player from './Player';
import TileMap from './TileMap';
import "./GameLevel.css"
import Shade from './Shade';
import TileService from "../TileService";

const GameLevel = ({ levelConfiguration, tileMap }) => {
  const { map, physicist, startPos, endPos } = levelConfiguration;

  const svgRef = useRef();

  // logic to render the game level based on the provided levelConfiguration

  return (
    <svg ref={svgRef} viewBox={`0 0 ${TileService.tileSize * map[0].length} ${TileService.tileSize * map.length}`}>
      {/* use the map array to render the tiles.. just an example */}
      <TileMap tileMap={tileMap} />

      {/* render the player using startPos */}
      <Player svg={svgRef} startPos={startPos}/>
      
    </svg>
  );
};

export default GameLevel;