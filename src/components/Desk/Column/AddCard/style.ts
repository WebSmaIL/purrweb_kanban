import styled from "styled-components";

export const AddCardButton = styled.button`
    display: flex;
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;

    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;

    cursor: pointer;

    font-size: 12px;
    font-weight: bold;
    color: #9b9b9b;

    transition: all 0.2s ease;

    & img {
        width: 15px;
        height: 15px;
    }

    &:hover {
        background: #525252;
        color: #dbdbdb;
    }
`;
