import React from "react";
import { Icon, InfoContainer, NameContainer } from "./style";
import { userIcon } from "../../../assets";

interface IProps {
    Name: string;
}

const UserInfo = ({ Name }: IProps): JSX.Element => {
    return (
        <InfoContainer>
            <Icon src={userIcon} alt="" />
            <NameContainer>
                <span>{Name}</span>
            </NameContainer>
        </InfoContainer>
    );
};

export default UserInfo;
