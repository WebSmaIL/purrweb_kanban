import styled, { keyframes } from "styled-components";

const popupAnim = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9); 
    } 
    to {
        opacity: 1;
        transform: scale(1); 
    }
`;

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background: #00000076;
    backdrop-filter: blur(10px);
`;

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 50px 25px 20px 25px;

    background: #3d3d3dff;
    box-shadow: 0 0 10px #00000080;
    border-radius: 25px;

    animation: ${popupAnim} 0.3s linear;
`;

export const Title = styled.h1`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 40px;

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

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputName = styled.input`
    display: block;
    padding: 10px 15px;
    margin-bottom: 10px;

    background: none;
    border: 1px solid #505050ff;
    border-radius: 10px;

    color: #ffffff;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`;

export const SubmitButton = styled.button`
    display: block;
    width: 100%;
    padding: 10px 15px;

    background: none;
    border-bottom: 1px solid #505050ff;
    border-right: 1px solid #505050ff;
    border-top: 1px solid #323232ff;
    border-left: 1px solid #323232ff;
    border-radius: 5px;

    transition: all 0.2s ease;

    color: #ffffff;
    cursor: pointer;

    &:hover {
        background: #444444ff;
    }
`;
