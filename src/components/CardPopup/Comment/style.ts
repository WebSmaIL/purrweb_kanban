import styled from "styled-components";

export const CommentContainer = styled.div`
    width: 100%;
    padding: 5px;
    margin-bottom: 20px;

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
`;
