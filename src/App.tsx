import React, { useState } from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { useAppSelector } from "./hooks";
import { ICardInfo } from "./interfaces/baseInterfaces";
import CardPopupContainer from "./components/CardPopup/CardPopupContainer";
import { getName } from "./redux/ducks/user";

interface IContextState {
    setViewedCard: React.Dispatch<React.SetStateAction<ICardInfo | undefined>> | undefined
}

const initialState: IContextState = {
    setViewedCard: undefined
}

export const ViewedContext = React.createContext<IContextState>(initialState);

const App = (): JSX.Element => {
    const userName = useAppSelector(getName);

    const [viewedCard, setViewedCard] = useState<ICardInfo | undefined>(
        undefined
    );

    return (
        <ViewedContext.Provider value={{setViewedCard}}>
            <Wrapper>
                <SideBar Name={userName} />
                <Desk setViewedCard={setViewedCard} />
                {!userName && <LoginPopup />}
                {viewedCard && (
                    <CardPopupContainer
                        columnId={viewedCard.columnId}
                        cardId={viewedCard.cardId}
                    />
                )}
            </Wrapper>
        </ViewedContext.Provider>
    );
};

export default App;
