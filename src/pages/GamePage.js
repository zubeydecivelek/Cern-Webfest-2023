// gamepage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import levels from '../Tiles/levels';
import GameLevel from '../GameService/components/GameLevel';
import GameService from '../GameService/GameService'
import CameraService from '../GameService/CameraService';
import TestPopUp from '../PopUpService/pop-ups/TestPopUp';
import DialogPopUp from "../PopUpService/pop-ups/Dialog"

const GamePage = ({character}) => {
  const [showTestPopUp, setShowTestPopUp] = useState(false);
  const [showDialogPopUp, setShowDialogPopUp] = useState(false);


  const { levelIndex } = useParams(); // Access the levelIndex parameter from the URL
  const parsedLevelIndex = levelIndex ? parseInt(levelIndex, 10) : 0;
  const levelConfiguration = levels[parsedLevelIndex];

  const gameService = GameService.getInstance();
  const tileMap = gameService.start(levelConfiguration);

  useEffect(() => {
    gameService.freePlayer(setShowTestPopUp,setShowDialogPopUp);

    return () => {
      gameService.stopPlayer();
    }
  });

  return (<>
  <GameLevel levelConfiguration={levelConfiguration} tileMap={tileMap} character={character}/>
      {showTestPopUp && <TestPopUp setShowPopUp={setShowTestPopUp} levelNumber={levelIndex} />}
      {showDialogPopUp && <DialogPopUp setShowPopUp={setShowDialogPopUp} levelNumber={levelIndex} />}

  </>
      

  );
};

export default GamePage;