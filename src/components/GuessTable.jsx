import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import GuessRow from "./GuessRow";
import { convertPokemonTypeToPokemonStats } from "../convertPokemonTypeToPokemonStats";

const GuessTable = () => {
    const {guessed, pokemon, started} = useContext(PokemonContext);

    return started && (guessed.length > 0) ? (
        <table width="100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type 1</th>
                    <th>Type 2</th>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Sp. Attack</th>
                    <th>Sp. Defense</th>
                    <th>Speed</th>
                </tr>
            </thead>
            <tbody>
            {
              guessed
                .map((guess) => {
                  const pokemonType = pokemon.find((element) => { return element.name.english === guess });

                  if (!pokemonType) {
                    return null;
                  }

                  const pokemonStats = convertPokemonTypeToPokemonStats(pokemonType);

                  return (
                    <tr key={pokemonStats.id}>
                        <GuessRow {...pokemonStats} />
                    </tr>
                  )
                })
            }
            </tbody>
        </table>
    ) : null;
};

export default GuessTable;