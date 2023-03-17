import React, { useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";
import GuessKeyboard from "../GuessKeyboard/GuessKeyboard";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));

  useEffect(() => {
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
  }, [answer]);

  const [isGameWon, setIsGameWon] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const [guesses, setGuesses] = React.useState([]);

  const [guessKeyboardKeyState, setGuessKeyboardKeyState] = React.useState({});

  const addGuess = (guess) => {
    const newGuesses = [...guesses];
    newGuesses.push(guess);

    setGuesses(newGuesses);

    const newGuessKeyboardKeyState = { ...guessKeyboardKeyState };
    guess.checkGuessOutput.map((output) => {
      newGuessKeyboardKeyState[output.letter] = output.status;
    });

    setGuessKeyboardKeyState(newGuessKeyboardKeyState);

    if (guess.value === answer) {
      setIsGameWon(true);
    } else if (guesses.length >= 6) {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));

    const newGuesses = [];
    setGuesses(newGuesses);

    setGuessKeyboardKeyState({});

    setIsGameOver(false);
    setIsGameWon(false);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        addGuess={addGuess}
        answer={answer}
        disabled={isGameOver || isGameWon}
      />
      {isGameWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guess(es)</strong>.
          </p>
          <button className="button" onClick={() => resetGame()}>
            Restart Game
          </button>
        </div>
      )}

      <GuessKeyboard guessKeyboardKeyState={guessKeyboardKeyState} />

      {isGameOver && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button className="button" onClick={() => resetGame()}>
            Restart Game
          </button>
        </div>
      )}
    </>
  );
}

export default Game;
