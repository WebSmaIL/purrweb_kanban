import styled from "styled-components";

export const AddCardInput = styled.input<{isVisible: boolean}>`
    display: ${props => props.isVisible ? 'block' : 'none'};
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;

    border-radius: 5px;
    border: 1px solid #9b9b9b;
    background: none;

    color: #ffffff;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`

export const AcceptAddCardButton = styled.button<{isVisible: boolean}>`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;

    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;

    cursor: pointer;

    font-size: 12px;
    font-weight: bold;
    color: #9b9b9b;

    transition: all .2s ease;

    &:hover {
        background: #525252;
        color: #dbdbdb;
    }
`