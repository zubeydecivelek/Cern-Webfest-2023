import React, { useState }  from 'react';
import './ChooseCharacter.css';
import { characterImages } from './constants';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


const ChooseCharacterPage = ({setCharacter}) => {
  const navigate = useNavigate(); // Create a navigate function using the hook

  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);

  const selectCharacter = (index) => {
    setSelectedCharacterIndex(index);
    setCharacter(characterImages[index]);
  };

  const StartGame = () => {
    if (selectedCharacterIndex == null) {
      setCharacter(characterImages[1]);
    }
    navigate(`/game/0`); 
    
  };

  return (
    <div className="character-container">
      <h2>Choose Your Character</h2>
      <div className="character-list">
        {characterImages.map((imageUrl, index) => (
          <div
            key={index}
            className={`character-item ${selectedCharacterIndex === index ? 'selected' : ''}`}
            onClick={() => selectCharacter(index)}
          >
            <img
              src={imageUrl}
              alt={`Character ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className="start-game-button" onClick={StartGame}>
        Start Game
      </button>
    </div>
  );
  
}
export default ChooseCharacterPage;