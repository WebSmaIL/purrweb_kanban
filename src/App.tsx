import React, { useEffect, useState } from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import { LocalStorageAPI } from "./api/LocalStorageAPI";
import { StateContext, ContextState } from "./api/ContextAPI";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import CardPopup from "./components/CardPopup/CardPopup";
import { ICardInfo } from "./interfaces/baseInterfaces";

const App = (): JSX.Element => {
    const [columns, setColumns] = useState(ContextState);
    useEffect(() => LocalStorageAPI.updateColumns(columns), [columns]);

    const [name, setName] = useState(LocalStorageAPI.getName());
    useEffect(() => LocalStorageAPI.updateName(name), [name]);

    const [viewedCard, setViewedCard] = useState<ICardInfo | undefined>(undefined);

    return (
        <StateContext.Provider
            value={{ columns, setColumns, setViewedCard, userName: name }}
        >
            <Wrapper>
                <SideBar Name={name} />
                <Desk columns={columns} />
                {!name && <LoginPopup setName={setName} />}
                {viewedCard && <CardPopup columnId={viewedCard.columnId} cardId={viewedCard.cardId} />}
            </Wrapper>
        </StateContext.Provider>
    );
};

export default App;
