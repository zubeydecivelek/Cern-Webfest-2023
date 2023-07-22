import React, { useState, useEffect } from 'react';
import GameService from "../GameService/GameService"
import levels from "../GameService/levels"
import GameLevel from '../GameService/view/GameLevel'; // Import the GameLevel component

const GamePage = ({ params }) => {
  const levelIndex = params && params.levelIndex ? parseInt(params.levelIndex, 10) : 0;

  // Get the level configuration based on the level index
  const levelConfiguration = levels[levelIndex];

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
      <h1>Welcome to Level {levelIndex}</h1>
      {/* Render the GameLevel component and pass the level configuration as a prop */}
      <GameLevel tileMap={tileMap} levelConfiguration={levelConfiguration} />
    </div>
  );
};

export default GamePage;

