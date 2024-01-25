import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Game from './Game';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Game />}>
          <Route index element={<GameOverview />} />
          <Route path="play" element={<GamePlay />} />
          {/* Add more component-specific routes */}
        </Route>
        {/* Add more global routes */}
      </Routes>
    </Router>
  );
};

const GameOverview = () => {
  return <p>Game Overview</p>;
};

const GamePlay = () => {
  return <p>Game Play</p>;
};

export default AppRoutes;
