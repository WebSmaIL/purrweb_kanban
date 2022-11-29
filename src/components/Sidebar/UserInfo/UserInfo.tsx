import React from 'react'
import icon from '../../../assets/user_icon.svg'
import pen from '../../../assets/pen.svg'
import Styles from './style'

interface IProps {
    Name: string
}

const UserInfo = ({ Name }: IProps): JSX.Element => {
    return (
        <Styles.InfoContainer>
            <Styles.Icon src={icon} alt=""/>
            <Styles.NameContainer>
                <span>{ Name }</span>
                <Styles.RenameButton>
                    <img src={ pen } alt="" />
                </Styles.RenameButton>
            </Styles.NameContainer>
        </Styles.InfoContainer>
    )
}

export default UserInfo
