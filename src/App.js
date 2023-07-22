import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import EndPage from './pages/EndPage';
import OpeningPage from './OpeningPage';

const App = () => {

  const [avatar, setAvatar] = useState(null);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game/:levelIndex" element={<GamePage />} /> {/* Use JSX syntax */}
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
