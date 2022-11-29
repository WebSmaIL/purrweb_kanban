import styled from 'styled-components'

const Column = styled.div`
    padding: 10px 15px;
    background: #333333;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    text-align: center;
`

const Title = styled.h2`
    font-size: 24px;
    color: #ffffff;
`

const RenameButton = styled.button`
    display: block;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 5px;
    margin-top: 5px;

    & img {
        width: 15px;
        height: 15px;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Styles = {
    Column,
    Title,
    RenameButton,
    Container
}

export default Styles
