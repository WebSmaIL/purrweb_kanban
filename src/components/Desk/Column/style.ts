import styled from 'styled-components'

const Column = styled.div`
    padding: 10px 15px;
    background: #333333;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    width: 200px;

    text-align: center;

    transition: all .3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const RenameButton = styled.button`
    display: block;
    width: 25px;
    height: 25px;
    
    margin-left: 5px;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    transition: all .3s ease;

    /* & img {
        width: 25px;
        height: 25px;
    } */

    &:hover {
        transform: scale(1.1);
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #525252;
    margin-bottom: 10px;
`

const InputName = styled.input`
    display: ${props => props.disabled ? 'none' : 'block'};
    width: 100%;
    height: 20px;
    padding: 5px 10px;

    border-radius: 5px;
    border: 1px solid #9b9b9b;
    background: none;

    color: #ffffff;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`

const AddCardButton = styled.button`
    background: none;
    border: none;
    border-radius: 5px;
    outline: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;

    cursor: pointer;

    font-size: 12px;
    font-weight: bold;
    color: #9b9b9b;

    transition: all .2s ease;

    & img {
        width: 15px;
        height: 15px;
    }

    &:hover {
        background: #525252;
        color: #dbdbdb;
    }
`

const Styles = {
    Column,
    RenameButton,
    Container,
    InputName,
    AddCardButton
}

export default Styles
