// GamePlay.js

import React, { useState, useEffect } from 'react';

const GamePlay = () => {
  const [secretWord, setSecretWord] = useState('');
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const maxAttempts = 6;

  useEffect(() => {
    // Fetch the secret word from your backend or choose it randomly
    const fetchSecretWord = async () => {
      // Example: Fetch the secret word from an API
      const response = await fetch('https://api.example.com/secret-word');
      const data = await response.json();
      setSecretWord(data.secretWord);
    };

    fetchSecretWord();
  }, []);

  const handleGuess = () => {
    // Check if the guessed word is correct
    if (guess === secretWord) {
      setFeedback('Congratulations! You guessed the word!');
    } else {
      setAttempts((prevAttempts) => prevAttempts + 1);
      // Provide feedback based on the guessed word
      const newFeedback = generateFeedback(secretWord, guess);
      setFeedback(newFeedback);

      // Check if the maximum attempts are reached
      if (attempts + 1 === maxAttempts) {
        setFeedback(`Sorry, you've reached the maximum attempts. The correct word was "${secretWord}".`);
      }
    }
  };

  const generateFeedback = (secret, guess) => {
    // Implement the logic to generate feedback (e.g., matching letters)
    // For simplicity, let's assume the correct letters are in the correct position
    let feedback = '';
    for (let i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) {
        feedback += 'O';
      } else if (secret.includes(guess[i])) {
        feedback += 'X';
      } else {
        feedback += '-';
      }
    }
    return feedback;
  };

  return (
    <div>
      <h3>Play Wordle</h3>
      <p>Guess the secret word within {maxAttempts} attempts!</p>
      <p>Attempts: {attempts}</p>
      <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>Feedback: {feedback}</p>
    </div>
  );
};

export default GamePlay;
