import React, { useEffect, useState } from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import { LocalStorageAPI } from "./api/LocalStorageAPI";
import { ColumnsContext, ContextState } from "./api/ContextAPI";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = (): JSX.Element => {
    const [columns, setColumns] = useState(ContextState);
    useEffect(() => LocalStorageAPI.updateColumns(columns), [columns]);

    const [name, setName] = useState(LocalStorageAPI.getName());
    useEffect(() => LocalStorageAPI.updateName(name), [name]);

    return (
        <ColumnsContext.Provider value={{ columns, setColumns }}>
            <Wrapper>
                <SideBar Name={name} />
                <Desk columns={columns} />

                {name || <LoginPopup setName={setName} />}
            </Wrapper>
        </ColumnsContext.Provider>
    );
};

export default App;
