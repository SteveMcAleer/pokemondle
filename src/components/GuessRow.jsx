import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { compareTextField, compareNumberField, compareTypeField } from "../compareField";

const GuessRow = (pokemonStats) => {
    const {answer} = useContext(PokemonContext);

    return (
        <>
            {compareTextField(pokemonStats.name, answer.name)}
            {compareTypeField(pokemonStats.type1, answer.type1, answer.type2)}
            {compareTypeField(pokemonStats.type2, answer.type2, answer.type1)}
            {compareNumberField(pokemonStats.hp, answer.hp)}
            {compareNumberField(pokemonStats.attack, answer.attack)}
            {compareNumberField(pokemonStats.defense, answer.defense)}
            {compareNumberField(pokemonStats.spattack, answer.spattack)}
            {compareNumberField(pokemonStats.spdefense, answer.spdefense)}
            {compareNumberField(pokemonStats.speed, answer.speed)}
        </>
    );
};

export default GuessRow;