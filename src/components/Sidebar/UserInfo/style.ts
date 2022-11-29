import styled from 'styled-components'

const InfoContainer = styled.div`
    justify-self: center;
    width: fit-content;
    min-width: 150px;
    height: 100px;
    margin: 0 auto;
    padding: 10px 15px;

    background: #292929;
    box-shadow: 0 0 10px #0000005d;
    text-shadow: none;
    border-radius: 15px;

    font-weight: bold;
    font-size: 20px;

    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 auto 10px auto;
`

const NameContainer = styled.div`
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    position: relative;
`

const RenameButton = styled.button`
    width: 25px;
    height: 25px;

    background: none;
    border: none;
    outline: none;

    position: absolute;
    top: 50%;
    margin-top: -12.5px;
    right: -30px;
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

const Styles = {
    Icon,
    InfoContainer,
    NameContainer,
    RenameButton
}

export default Styles
