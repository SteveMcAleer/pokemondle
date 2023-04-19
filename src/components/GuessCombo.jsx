import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { Autocomplete, TextField } from "@mui/material";

const GuessCombo = () => {
    const { pokemonName, guess, guessSet, started } = useContext(PokemonContext);

    return started ? (
        <Autocomplete
            disablePortal
            id="guess-combo-box"
            options={pokemonName}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Guess a Pokemon" />}
            style={{width: 500, padding: 10}}
            onLoad={() => guessSet("")}
            value={guess}
            onChange={(event, value) => guessSet(value ? value : "")}
        />
    ) : null;
};

export default GuessCombo;