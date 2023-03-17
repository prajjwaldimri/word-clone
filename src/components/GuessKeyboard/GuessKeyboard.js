import React, { useEffect } from "react";

function GuessKeyboard({ guessKeyboardKeyState }) {
  useEffect(() => {
    console.info(guessKeyboardKeyState);
  }, [guessKeyboardKeyState]);

  return (
    <div className="keyboard-container">
      <div className="guess keyboard">
        <span className={`cell keyboard ${guessKeyboardKeyState["Q"]}`}>Q</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["W"]}`}>W</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["E"]}`}>E</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["R"]}`}>R</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["T"]}`}>T</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["Y"]}`}>Y</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["U"]}`}>U</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["I"]}`}>I</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["O"]}`}>O</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["P"]}`}>P</span>
      </div>

      <div className="guess keyboard">
        <span className={`cell keyboard ${guessKeyboardKeyState["A"]}`}>A</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["S"]}`}>S</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["D"]}`}>D</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["F"]}`}>F</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["G"]}`}>G</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["H"]}`}>H</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["J"]}`}>J</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["K"]}`}>K</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["L"]}`}>L</span>
      </div>

      <div className="guess keyboard">
        <span className={`cell keyboard ${guessKeyboardKeyState["Z"]}`}>Z</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["X"]}`}>X</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["C"]}`}>C</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["V"]}`}>V</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["B"]}`}>B</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["N"]}`}>N</span>
        <span className={`cell keyboard ${guessKeyboardKeyState["M"]}`}>M</span>
      </div>
    </div>
  );
}

export default GuessKeyboard;
