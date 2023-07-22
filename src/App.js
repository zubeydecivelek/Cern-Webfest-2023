import { useEffect } from 'react';
import './App.css';
import PlayerService from './GameService/PlayerService';
import { Player } from './GameService/view/Player';
import TileService from './GameService/TileService';
import GameService from './GameService/GameService';


function App() {

  const gameService = GameService.getInstance();

  useEffect(() => {
    gameService.start();

    return () => {
      gameService.stop();
    }
  });

  return (
    <div className="App">
      <svg width="500px" height="500px" style={{border: "1px solid black"}} viewBox='-250 -250 500 500'>
        <Player />
      </svg>
    </div>
  );
}

export default App;
