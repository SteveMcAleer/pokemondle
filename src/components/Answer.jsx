import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { CorrectTd } from "../styles/TdStyles";
import { Title } from "../styles/PageLayout";

const Answer = () => {
    const { answer, won, guessed } = useContext(PokemonContext);

    return answer && won ? (
        <>
            <Title>You got it in {guessed.length} tries!</Title>
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
                    <tr key={answer.id}>
                        <CorrectTd>{answer.name}</CorrectTd>
                        <CorrectTd>{answer.type1}</CorrectTd>
                        <CorrectTd>{answer.type2}</CorrectTd>
                        <CorrectTd>{answer.hp}</CorrectTd>
                        <CorrectTd>{answer.attack}</CorrectTd>
                        <CorrectTd>{answer.defense}</CorrectTd>
                        <CorrectTd>{answer.spattack}</CorrectTd>
                        <CorrectTd>{answer.spdefense}</CorrectTd>
                        <CorrectTd>{answer.speed}</CorrectTd>
                    </tr>
                </tbody>
            </table>
        </>
    ) : null;
};

export default Answer;