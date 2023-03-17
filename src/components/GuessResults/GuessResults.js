import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.slice(0, NUM_OF_GUESSES_ALLOWED).map((guess) => (
        <p className="guess" key={guess.id}>
          {range(0, guess.value.length).map((v, i) => {
            return (
              <span
                className={`cell ${guess.checkGuessOutput[i].status}`}
                key={`${guess.id}-${crypto.randomUUID()}`}
              >
                {guess.value[i]}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
