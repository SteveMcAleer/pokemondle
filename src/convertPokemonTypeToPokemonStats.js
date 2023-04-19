import PropTypes from "prop-types";
import PokemonType from "./PokemonType";
import PokemonStats from "./PokemonStats";

const convertPokemonTypeToPokemonStats = (pokemonType) => {
    return PokemonStats(
        pokemonType.id,
        pokemonType.name["english"],
        pokemonType.type.at(0),
        pokemonType.type.at(1) ? pokemonType["type"].at(1) : "",
        pokemonType.base["HP"],
        pokemonType.base["Attack"],
        pokemonType.base["Defense"],
        pokemonType.base["Sp. Attack"],
        pokemonType.base["Sp. Defense"],
        pokemonType.base["Speed"]
    );
};

convertPokemonTypeToPokemonStats.propTypes = {
    pokemonType: PropTypes.shape(PokemonType.isRequired),
};

export {convertPokemonTypeToPokemonStats};