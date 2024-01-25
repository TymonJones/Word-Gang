

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import GameOverview from './GameOverview';
import GamePlay from './GamePlay';

const Game = () => {
  return (
    <div>
      <h2>Wordle Game</h2>
      <p>This is the main Wordle game page.</p>

      <nav>
        <ul>
          <li>
            <Link to="/game">Game Overview</Link>
          </li>
          <li>
            <Link to="/game/play">Play Game</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<GameOverview />} />
        <Route path="play" element={<GamePlay />} />
      </Routes>
    </div>
  );
};

export default Game;
