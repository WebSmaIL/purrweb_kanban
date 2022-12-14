import React, { useState } from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { useAppSelector } from "./hooks";
import { userSelectors } from "./redux/ducks/user";
import CardPopup from "./components/CardPopup/CardPopup";

interface IContextState {
    setCurrentCard: (value: number) => void
}

const initialState: IContextState = {
    setCurrentCard: ()=>{},
};

export const CurrentCardContext = React.createContext<IContextState>(initialState);

const App = (): JSX.Element => {
    const userName = useAppSelector(userSelectors.getName);

    const [currentCard, setCurrentCard] = useState<number | undefined>(
        undefined
    );

    return (
        <CurrentCardContext.Provider value={{ setCurrentCard }}>
            <Wrapper>
                <SideBar Name={userName} />
                <Desk />
                {!userName && <LoginPopup />}
                {currentCard && (
                    <CardPopup
                            cardId={currentCard}
                    />
                )}
            </Wrapper>
        </CurrentCardContext.Provider>
    );
};

export default App;
