// GamePage.js
import React, { useState, useEffect } from 'react';
import Player from "../GameService/view/Player"
import GameService from "../GameService/GameService"
import levels from "../GameService/levels"
import TileMap from "../GameService/view/TileMap"

const GamePage = () => {

  const allLevels = levels;
  const [level, setLevel] = useState(allLevels[0]);

  const gameService = GameService.getInstance();
  const tileMap = gameService.start(level);

  useEffect(() => {
    gameService.freePlayer();

    return () => {
      gameService.stopPlayer();
    }
  });

  return (
    <div>
      <svg style={{width: "100%", height: "100vh"}}>
        <Player />
        <TileMap tileMap={tileMap} />
      </svg>
    </div>
  );
};

export default GamePage;
