import styled from "styled-components";

export const DescriptionForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
`

export const DescriptionInput = styled.textarea`
    padding: 10px 5px;
    resize: none;
    background: none;
    width: 100%;
    height: 100px;

    border: none;

    font-family: Arial, serif;
    font-size: 16px;
    color: #ffffff;

    &:focus {
        outline: none;
    }

    
    &::-webkit-scrollbar { width: 0; }
`

export const SubmitDescription = styled.button`
    background: none;
    border: none;

    width: 30px;
    height: 30px;

    transition: all .2s ease;

    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(1.1);
    }
`