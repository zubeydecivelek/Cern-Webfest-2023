// GamePage.js
import React from 'react';
import {useState} from 'react'

const GamePage = () => {
  const startingPos = {x: 3, y: 0};
  const [playerPos, setPlayerPos] = useState(startingPos);
  const initTeleportSpots = [
    {
        label: 'Start',
        x: startingPos.x,
        y: startingPos.y,
    },
  ];
  const [teleportSpots, setTeleportSpots] = useState(initTeleportSpots);

  const resetGame = () => {
    setPlayerPos(startingPos);
    setTeleportSpots(initTeleportSpots);
  };
  console.log(playerPos)
  return (
    <div>
      <h1>Welcome to the Game Page</h1>
      {/* Your game content goes here */}
    </div>
  );
};

export default GamePage;
