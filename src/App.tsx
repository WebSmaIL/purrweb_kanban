import React, { useEffect, useState } from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import { LocalStorageAPI } from "./api/LocalStorageAPI";
import { ColumnsContext, ContextState } from "./api/ContextAPI";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import CardPopup from "./components/CardPopup/CardPopup";

const App = (): JSX.Element => {
    const [columns, setColumns] = useState(ContextState);
    useEffect(() => LocalStorageAPI.updateColumns(columns), [columns]);

    const [name, setName] = useState(LocalStorageAPI.getName());
    useEffect(() => LocalStorageAPI.updateName(name), [name]);

    const [viewedCard, setViewedCard] = useState(undefined);

    return (
        <ColumnsContext.Provider
            value={{ columns, setColumns, setViewedCard, userName: name }}
        >
            <Wrapper>
                <SideBar Name={name} />
                <Desk columns={columns} />
                {name ? null : <LoginPopup setName={setName} />}
                {viewedCard ? <CardPopup cardInfo={viewedCard} /> : null}
            </Wrapper>
        </ColumnsContext.Provider>
    );
};

export default App;
