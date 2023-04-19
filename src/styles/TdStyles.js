import styled from "@emotion/styled";

const CorrectTd = styled.td`
    border-radius: 10px;
    background: #64de84;
    padding: 10px;
    color: #ffffff;
    font-family: Roboto;
    font-weight: bold;
`;

const IncorrectTd = styled.td`
    border-radius: 10px;
    background: #f2431f;
    padding: 10px;
    color: #ffffff;
    font-family: Roboto;
    font-weight: bold;
`;

const CloseTd = styled.td`
    border-radius: 10px;
    background: #f2bf30;
    padding: 10px;
    color: #ffffff;
    font-family: Roboto;
    font-weight: bold;
`;

export { CorrectTd, IncorrectTd, CloseTd };