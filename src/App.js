import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import LandingPage from './pages/LandingPage';
import GamePage from './pages/GamePage';
import EndPage from './pages/EndPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game/:levelIndex" element={<GamePage />} /> {/* Add the ':levelIndex' parameter */}
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
