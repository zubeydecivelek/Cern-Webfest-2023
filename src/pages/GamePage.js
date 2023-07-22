// gamepage.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import levels from '../GameService/levels';
import GameLevel from '../GameService/view/GameLevel';


const GamePage = () => {
  const { levelIndex } = useParams(); // Access the levelIndex parameter from the URL
  const parsedLevelIndex = levelIndex ? parseInt(levelIndex, 10) : 0;
  const levelConfiguration = levels[parsedLevelIndex];

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
      <h1>Welcome to Level {parsedLevelIndex}</h1>
      <GameLevel levelConfiguration={levelConfiguration} />
    </div>
  );
};

export default GamePage;
