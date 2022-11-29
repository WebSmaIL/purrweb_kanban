import React from 'react'
import Column from './Column/Column'
import { column } from '../../interfaces/baseInterfaces'
import Styles from './style'

interface IProps {
    columns: column[]
}

const Desk = ({ columns }: IProps): JSX.Element => {
    return (
        <Styles.Container>
            <Styles.Title>Your Desk</Styles.Title>
            <Styles.Desk>
                {columns.map((element: column): JSX.Element => {
                    return <Column key={element.id} id={element.id} name={element.name} cards={element.cards} />
                })}
            </Styles.Desk>
        </Styles.Container>
    )
}

export default Desk
