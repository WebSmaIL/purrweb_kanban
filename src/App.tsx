import React, { useEffect, useState } from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import { LocalStorageAPI } from "./api/LocalStorageAPI"; 
import {ColumnsContext, ContextState} from './api/ContextAPI';

const App = (): JSX.Element => {
    const [columns, setColumns] = useState(ContextState);
    useEffect(() => {
        LocalStorageAPI.updateColumns(columns);
    }, [columns])

    return (
        <ColumnsContext.Provider value={{columns, setColumns}}>
            <Wrapper>
                <SideBar Name="Guest" />
                <Desk columns={columns} />
            </Wrapper>
        </ColumnsContext.Provider>
    );
};

export default App;
