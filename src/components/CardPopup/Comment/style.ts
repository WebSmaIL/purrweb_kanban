import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;

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
`;

export const Author = styled.h3`
    margin: 0;
    color: #ffffff;
    font-size: 16px;
`;

export const Content = styled.p`
    margin: 5px 10px;
    color: #ffffff;
    font-size: 14px;
    font-weight: lighter;
    margin-right: 20px;
`;

export const Button = styled.button`
    background: none;
    border: none;

    width: 25px;
    height: 25px;

    transition: all .2s ease;

    position: absolute;
    

    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(1.1);
    }
`

export const DeleteButton = styled(Button)`
    top: 0;
    right: 10px;
`

export const ChangeButton = styled(Button)`
    top: 0;
    right: 40px;
`

export const InputComment = styled.input`
    background: none;
    border: 1px solid #505050ff;    
    margin-bottom: 10px;
    margin-right: 20px;
    padding: 5px 10px;

    font-size: 16px;
    color: #ffffff;

    &:focus {
        outline: 1px solid #ffffff;
    }
`;
