import React from "react";
import {Icon, InfoContainer, NameContainer, RenameButton} from "./style";
import assets from "../../../assets";

interface IProps {
    Name: string;
}

const { userIcon, pen } = assets;

const UserInfo = ({ Name }: IProps): JSX.Element => {
    return (
        <InfoContainer>
            <Icon src={userIcon} alt="" />
            <NameContainer>
                <span>{Name}</span>
                <RenameButton>
                    <img src={pen} alt="" />
                </RenameButton>
            </NameContainer>
        </InfoContainer>
    );
};

export default UserInfo;
