// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
// // __tests__/GamePlay.test.js

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import GamePlay from '../GamePlay';

// test('renders GamePlay component', () => {
//   render(<GamePlay />);

//   // Check if the component renders correctly
//   expect(screen.getByText('Play Wordle')).toBeInTheDocument();
//   expect(screen.getByText('Guess the secret word within 6 attempts!')).toBeInTheDocument();
// });

// test('handles user input and submission', () => {
//   render(<GamePlay />);

//   // Simulate user input
//   fireEvent.change(screen.getByRole('textbox'), { target: { value: 'example' } });

//   // Simulate button click
//   fireEvent.click(screen.getByText('Submit Guess'));

//   // Check if the component updates accordingly
//   expect(screen.getByText('Attempts: 1')).toBeInTheDocument();
//   // You might need to adjust this expectation based on your actual feedback logic
//   expect(screen.getByText('Feedback: ...')).toBeInTheDocument();
// });
