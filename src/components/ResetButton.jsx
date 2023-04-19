import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { Button } from "@mui/material";
import { getRandomPokemonStats } from "../getRandomPokemonStats";

const ResetButton = () => {
    const { guessSet, guessedSet, answerSet, pokemon, started, wonSet } = useContext(PokemonContext);

    return started ? (
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                wonSet(false);
                guessedSet([]);
                guessSet("");
                answerSet(getRandomPokemonStats(pokemon));
            }}
        >
            Reset
        </Button>
    ) : null;
};

export default ResetButton;