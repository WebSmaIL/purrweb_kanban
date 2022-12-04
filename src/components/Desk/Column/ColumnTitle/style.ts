import styled from "styled-components";

export const Title = styled.h2<{ disabled: boolean }>`
    display: ${(props) => (props.disabled ? "none" : "inline")};
    font-size: 18px;
    font-weight: normal;
    color: #ffffff;
    margin: 0;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #525252;
    margin-bottom: 10px;
`;

export const InputName = styled.input`
    width: 100%;
    padding: 5px 10px;

    border-radius: 5px;
    border: 1px solid #9b9b9b;
    background: none;

    color: #ffffff;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`;

export const RenameButton = styled.button`
    display: block;
    width: 25px;
    height: 25px;

    margin-left: 5px;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const AcceptButton = styled.button`
    display: block;
    width: 25px;
    height: 25px;

    margin-left: 5px;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;
