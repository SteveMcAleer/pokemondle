import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { Button } from "@mui/material";

const GuessButton = () => {
    const { answer, guess, guessed, guessedSet, started, wonSet, won } = useContext(PokemonContext);

    return started ? (
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                if (!won && guess.length > 0) {
                    if (guessed.lastIndexOf(guess) === -1) {
                        const newGuess = [guess];
                        guessedSet(guessed.concat(newGuess));

                        if (guess === answer.name)
                        {
                            wonSet(true);
                        }
                    } else {
                        alert("This pokemon has already been guessed!");
                    }
                }
            }}
        >
            Guess
        </Button>
    ) : null;
};

export default GuessButton;