import React from "react";
import { CorrectTd, IncorrectTd, CloseTd } from "./styles/TdStyles";

const compareTextField = (source, target) => {
    if (source === target) {
        return <CorrectTd>{source}</CorrectTd>
    } else {
        return <IncorrectTd>{source}</IncorrectTd>
    }
};

const compareNumberField = (source, target) => {
    if (source === target) {
        return <CorrectTd>{source}</CorrectTd>
    } else {
        if (source - target > 0) {
            if (source - target < 11) {
                return <CloseTd>{source}&#129047;</CloseTd>
            } else {
                return <IncorrectTd>{source}&#8650;</IncorrectTd>
            }
        } else {
            if (target - source < 11) {
                return <CloseTd>{source}&#129045;</CloseTd>
            } else {
                return <IncorrectTd>{source}&#8648;</IncorrectTd>
            }
        }
    }
};

const compareTypeField = (source, target, altTarget) => {
    if (source === target) {
        return <CorrectTd>{source}</CorrectTd>
    } else {
        if (source === altTarget) {
            return <CloseTd>{source}</CloseTd>
        } else {
            return <IncorrectTd>{source}</IncorrectTd>
        }
    }
};

export { compareTextField, compareNumberField, compareTypeField };