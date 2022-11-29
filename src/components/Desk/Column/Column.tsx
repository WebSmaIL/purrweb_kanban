import React from 'react'
import { column as IProps } from '../../../interfaces/baseInterfaces'
import Styles from './style'
import pen from '../../../assets/pen.svg'

const Column = ({ id, name, cards }: IProps): JSX.Element => {
    return (
        <Styles.Column>
            <Styles.Container>
                <Styles.Title>{name}</Styles.Title>
                <Styles.RenameButton>
                    <img src={ pen } alt="" />
                </Styles.RenameButton>
            </Styles.Container>
        </Styles.Column>
    )
}

export default Column
