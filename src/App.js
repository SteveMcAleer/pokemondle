import React from "react";

import { Title, PageContainer, FlexRow } from "./styles/PageLayout";
import GuessCombo from "./components/GuessCombo";
import GuessButton from "./components/GuessButton";
import PokemonContext from "./PokemonContext";
import ResetButton from "./components/ResetButton";
import Answer from "./components/Answer";
import GuessTable from "./components/GuessTable";
import StartButton from "./components/StartButton";

function App() {
  const [started, startedSet] = React.useState(false);
  const [pokemon, pokemonSet] = React.useState([]);
  const [pokemonName, pokemonNameSet] = React.useState([]);
  const [guess, guessSet] = React.useState("");
  const [guessed, guessedSet] = React.useState([]);
  const [answer, answerSet] = React.useState(null);
  const [won, wonSet] = React.useState(false);

  const loadPokemonData = async () => {
    try {
      const resp = await fetch("/Pokemon.json");
      const data = await resp.json();
      pokemonSet(data);
      pokemonNameSet(data.map(data => data.name.english));
    }
    catch (error) {
      console.log("loadPokemonData", error);
    }
  };

  React.useEffect(() => {
    loadPokemonData()
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        answer,
        guess,
        guessed,
        pokemon,
        pokemonName,
        started,
        won,
        answerSet,
        guessSet,
        guessedSet,
        pokemonSet,
        pokemonNameSet,
        startedSet,
        wonSet
      }}
    >
      <PageContainer>
        <Title>Pokemondle!</Title>
        <FlexRow>
          <div>
            <StartButton />
          </div>
        </FlexRow>
        <FlexRow>
          <div>
            <GuessCombo />
          </div>
          <div>
            <GuessButton />
          </div>
        </FlexRow>
        <GuessTable />
        <FlexRow>
          <div>
            <ResetButton />
          </div>
        </FlexRow>
        <Answer />
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;