import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; // Import Routes here
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import EndPage from './pages/EndPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Wrap your Route components in a Routes element */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
