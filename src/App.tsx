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

    const [viewedCard, setViewedCard] = useState({
        cardID: 1,
        columnID: 1,
        comments: [{author:"ilya", content: "hellow world"}],
        description: "just testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a longjust testing a long description just testing a long description just testing a long description just testing a long description",
        name: 'testCard'
    });

    

    return (
        <ColumnsContext.Provider value={{ columns, setColumns }}>
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
