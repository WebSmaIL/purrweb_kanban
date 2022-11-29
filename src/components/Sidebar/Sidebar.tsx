import React from 'react'
import Styles from './style'
import UserInfo from './UserInfo/UserInfo'

interface IProps {
    Name: string
}

const Sidebar = ({ Name }: IProps): JSX.Element => {
    return (
        <Styles.Sidebar>
            <span>KANBAN</span>
            <UserInfo Name={Name}/>
        </Styles.Sidebar>
    )
}

export default Sidebar
