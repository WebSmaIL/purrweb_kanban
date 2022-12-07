import styled from "styled-components";

export const CommentInput = styled.textarea`
    padding: 10px 5px;
    resize: none;
    background: none;
    width: 100%;
    height: 50px;

    border: none;

    font-family: Arial, serif;
    font-size: 16px;
    color: #ffffff;

    &:focus {
        outline: none;
    }

    
    &::-webkit-scrollbar { width: 0; }
`

export const NewCommentForm = styled.form`
    display: flex;
    align-items: center;

    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;

        display: block;
        width: 100%;
        height: 1px;

        background: #505050ff;
    }
`

export const SendButton = styled.button`
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