import React from "react";

import { checkGuess } from "../../game-helpers";

function GuessInput({ addGuess, answer, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        addGuess({
          id: crypto.randomUUID(),
          value: guess,
          checkGuessOutput: checkGuess(guess, answer),
        });

        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5,5}"
        required
        disabled={disabled}
        value={guess}
        autoFocus
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
