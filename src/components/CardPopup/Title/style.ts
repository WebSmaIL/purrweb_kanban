import styled from "styled-components";

export const CardTitle = styled.h1`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 10px;
    margin-right: 20px;
    padding: 5px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: Arial, serif;
    color: #ffffff;

    position: relative;

    border-radius: 5px;

    cursor: pointer;
    transition: all .3s ease;

    &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;

        display: block;
        width: 100%;
        height: 1px;

        background: #505050ff;
    }

    &:hover {
        background: #505050ab;
    }
`;

export const UpdateTitleForm = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;

    & img {
        transition: all 0.3s ease;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        & img {
            transform: scale(1.1);
        }
    }
`;

export const InputTitle = styled.input`
    background: none;
    border: 1px solid #505050ff;
    border-radius: 5px;
    margin-right: 20px;
    padding: 10px 20px;

    font-size: 16px;
    color: #ffffff;

    &:focus {
        outline: 1px solid #ffffff;
    }
`;
