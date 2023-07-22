import React from 'react';
import levels from '../GameService/levels'; // Import the levels array
import GameLevel from '../GameService/view/GameLevel'; // Import the GameLevel component

const GamePage = ({ params }) => {
  const levelIndex = params && params.levelIndex ? parseInt(params.levelIndex, 10) : 0;

  // Get the level configuration based on the level index
  const levelConfiguration = levels[levelIndex];

  return (
    <div>
      <h1>Welcome to Level {levelIndex}</h1>
      {/* Render the GameLevel component and pass the level configuration as a prop */}
      <GameLevel levelConfiguration={levelConfiguration} />
    </div>
  );
};

export default GamePage;

