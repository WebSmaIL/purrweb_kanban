import styled, { keyframes } from 'styled-components';

const backdropAnim = keyframes`
    from {
        backdrop-filter: blur(0);
    }
    to {
        backdrop-filter: blur(10px);
    }
`

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
    animation: ${backdropAnim} .5s ease forwards;
`

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

    padding: 20px 25px 20px 25px;

    background: #3d3d3dff;
    box-shadow: 0 0 10px #00000080;
    border-radius: 25px;

    animation: ${popupAnim} 0.3s linear;
`

export const Title = styled.h1`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 30px;

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

export const Subtitle = styled.h3`
    display: inline-block;
    margin-top: 0;
    margin-bottom: 10px;

    font-family: Arial, serif;
    font-weight: lighter;
    color: #ffffff;
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
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);

    transition: all .2s ease;

    &:hover {
        background: #2f2f2f;
    }

`

export const Description = styled.p`
    display: inline-block;
    margin: 0;
    max-width: 500px;
    max-height: 300px;
    overflow: auto;

    font-family: Arial, serif;
    font-size: 16px;
    line-height: 1.25;
    
    &::-webkit-scrollbar { width: 0; }
`

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
`

export const CommentsContainer = styled.div`
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
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);

    transition: all .2s ease;

    &:hover {
        background: #2f2f2f;
    }

    & span {
        margin-bottom: 20px;
    }
`

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
        top: -5px;
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
