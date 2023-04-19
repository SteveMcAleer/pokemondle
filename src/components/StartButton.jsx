import { Button } from "@mui/material";
import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { getRandomPokemonStats } from "../getRandomPokemonStats";

const StartButton = () => {
    const { answerSet, pokemon, started, startedSet } = useContext(PokemonContext);

    return started ? null : (
        <Button
            variant="contained"
            color="primary"
            onClick={() => {
                answerSet(getRandomPokemonStats(pokemon));
                startedSet(true);
            }}
        >
            Start
        </Button>
    );
}

export default StartButton;