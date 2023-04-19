import PokemonStats from "./PokemonStats";

const getRandomPokemonStats = (pokemon) => {
    const rnd = Math.floor(Math.random() * pokemon.length);

    return PokemonStats(
        pokemon[rnd].id,
        pokemon[rnd].name["english"],
        pokemon[rnd].type.at(0),
        pokemon[rnd].type.at(1) ? pokemon[rnd]["type"].at(1) : "",
        pokemon[rnd].base["HP"],
        pokemon[rnd].base["Attack"],
        pokemon[rnd].base["Defense"],
        pokemon[rnd].base["Sp. Attack"],
        pokemon[rnd].base["Sp. Defense"],
        pokemon[rnd].base["Speed"]
    );
};

export { getRandomPokemonStats };