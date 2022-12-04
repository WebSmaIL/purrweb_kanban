import styled from "styled-components";

export const CardTitle = styled.h1`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 10px;
    margin-right: 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: Arial, serif;
    color: #ffffff;

    position: relative;

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
`;

export const InputTitle = styled.input`
    background: none;
    border: 1px solid #505050ff;    
    margin-bottom: 10px;
    margin-right: 20px;
    padding: 10px 20px;

    font-size: 16px;
    color: #ffffff;

    &:focus {
        outline: 1px solid #ffffff;
    }
`;