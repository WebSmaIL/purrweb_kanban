import styled, { keyframes } from "styled-components";

const backdropAnim = keyframes`
    from {
        backdrop-filter: blur(0);
    }
    to {
        backdrop-filter: blur(10px);
    }
`;

export const BackdropWrapper = styled.div`
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
    animation: ${backdropAnim} 0.5s ease forwards;
`;

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

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 550px;

    padding: 20px 25px 20px 25px;

    background: #3d3d3dff;
    box-shadow: 0 0 10px #00000080;
    border-radius: 25px;

    animation: ${popupAnim} 0.3s linear;

    position: relative;
`;

export const CloseButton = styled.button`
    width: 30px;

    background: none;
    border: none;

    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:focus {
        outline: none;
    }

    & img {
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        transform: scale(1.2);

        & img {
            transform: rotate(180deg);
        }
    }
`;

export const Subtitle = styled.h3`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 10px;

    font-family: Arial, serif;
    color: #ffffff;
`;

export const Author = styled(Subtitle)`
    font-size: 16px;
    font-weight: lighter;
    position: relative;

    margin-bottom: 30px;

    &:after {
        content: "";
        background: #4d4d4d;
        width: 100%;
        height: 1px;

        position: absolute;
        bottom: -5px;
        left: 0;
    }
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 25px;
    margin-bottom: 10px;
    width: 500px;
    max-height: 300px;

    position: relative;

    color: #ffffff;

    background: #393939;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    transition: all 0.2s ease;

    &:hover {
        background: #2f2f2f;
    }
`;

export const Description = styled.p`
    display: inline-block;
    margin: 0;
    max-width: 500px;
    max-height: 150px;
    overflow-y: auto;

    word-wrap: break-word;
    font-family: Arial, serif;
    font-size: 16px;
    line-height: 1.25;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const EditButton = styled.button`
    width: 25px;
    height: 25px;

    background: none;
    border: none;
    outline: none;

    position: absolute;
    bottom: 2px;
    right: 2px;
    cursor: pointer;

    transition: all 0.3s ease;

    & img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(1.1);
    }
`;

export const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 25px;
    max-width: 500px;
    max-height: 300px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;

    color: #ffffff;

    background: #393939;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    transition: all 0.2s ease;

    &:hover {
        background: #2f2f2f;
    }

    & span {
        margin-bottom: 20px;
    }
`;

export const CommentsContainer = styled.div`
    max-height: 150px;
    overflow-y: auto;
`;

export const DeleteButton = styled.button`
    margin: 20px auto 0 auto;
    width: 150px;
    height: 50px;

    background: #920101ff;
    border: none;
    border-radius: 30px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

    cursor: pointer;

    font-size: 18px;
    color: #ffffff;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
`;
