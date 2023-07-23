// gamepage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import levels from '../Tiles/levels';
import GameLevel from '../GameService/components/GameLevel';
import GameService from '../GameService/GameService'
import TestPopUp from '../PopUpService/pop-ups/TestPopUp';

const GamePage = () => {
  
  const [showTestPopup, setShowTestPopup] = useState(false);

  const { levelIndex } = useParams(); // Access the levelIndex parameter from the URL
  const parsedLevelIndex = levelIndex ? parseInt(levelIndex, 10) : 0;
  const levelConfiguration = levels[parsedLevelIndex];

  const gameService = GameService.getInstance(parsedLevelIndex);
  gameService.tileEventService.eventMatrix = levelConfiguration.eventMatrix;
  console.log(levelConfiguration.endPos);
  gameService.addTileEvent(1, levelConfiguration.endPos, (event) => {
    setShowTestPopup(true)
  });
  const tileMap = gameService.start(levelConfiguration);

  useEffect(() => {
    gameService.freePlayer();

    return () => {
      gameService.stopPlayer();
    }
  });

  return (
      <>
        <GameLevel levelConfiguration={levelConfiguration} tileMap={tileMap}/>
        {showTestPopup && <TestPopUp setShowPopUp={setShowTestPopup} levelNumber={levelIndex}/>}
      </>
  );
};

export default GamePage;
