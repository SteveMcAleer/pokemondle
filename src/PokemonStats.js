const PokemonStats = (id, name, type1, type2, hp, attack, defense, spattack, spdefense, speed) => {
    return {
        id: id,
        name: name,
        type1: type1,
        type2: type2,
        hp: hp,
        attack: attack,
        defense: defense,
        spattack: spattack,
        spdefense: spdefense,
        speed: speed
    }
};

export default PokemonStats;