import styled from "styled-components";

export const CardContainer = styled.div`
    display: block;
    width: 100%;
    min-height: 50px;
    margin-bottom: 10px;

    background: #424242;
    border-radius: 10px;

    transition: all .3s ease;

    &:hover {
        background: #4e4e4e;
    }
`

export const CardTitle = styled.h2 `
    font-size: 18px;
    color: #d1d1d1;
    margin: 0;
    word-wrap: break-word;
`

export const TitleContainer = styled.div`
    text-align: left;
    padding: 10px;
    padding-right: 40px;

    position: relative;
    box-sizing: border-box;
`

export const ViewButton = styled.button`
    background: none;
    border: none;
    outline: none;

    width: 20px;
    height: 20px;

    position: absolute;
    top: 10px;
    right: 20px;

    transition: all .3s ease;

    cursor: pointer;

    & img {
        width: 25px;
        height: 25px;
    }

    &:hover {
        transform: scale(1.05);
    }
`

export const CommentContainer = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 5px 10px;

    color: #d1d1d1;

    & img {
        margin-right: 5px;
    }
`