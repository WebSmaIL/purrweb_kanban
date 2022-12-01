import React from "react";
import { SidebarContainer } from "./style";
import UserInfo from "./UserInfo/UserInfo";

interface IProps {
    Name: string;
}

const Sidebar = ({ Name }: IProps): JSX.Element => {
    return (
        <SidebarContainer>
            <span>KANBAN</span>
            <UserInfo Name={Name} />
        </SidebarContainer>
    );
};

export default Sidebar;
