import React from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import CardPopup from "./components/CardPopup/CardPopup";
import { useAppSelector } from "./hooks";

const App = (): JSX.Element => {
    const userName = useAppSelector((state) => state.userInfo.name);
    const viewedCard = useAppSelector((state) => state.viewedCard);

    return (
        <Wrapper>
            <SideBar Name={userName} />
            <Desk />
            {!userName && <LoginPopup />}
            {viewedCard.columnId && viewedCard.cardId ? (
                <CardPopup
                    columnId={viewedCard.columnId}
                    cardId={viewedCard.cardId}
                />
            ) : null}
        </Wrapper>
    );
};

export default App;
