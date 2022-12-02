import React, { createContext, useState } from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import { LocalStorageAPI } from "./api/LocalStorageAPI";
import { IColumn } from "./interfaces/baseInterfaces";

const columnsInStorage = LocalStorageAPI.getColumns();
const ContextColumns = columnsInStorage || [
    {
        id: 1,
        name: "TODO",
        cards: [],
    },
    {
        id: 2,
        name: "In Progress",
        cards: [],
    },
    {
        id: 3,
        name: "Testing",
        cards: [],
    },
    {
        id: 4,
        name: "Done",
        cards: [],
    },
];

type ContextType = {
    columns: IColumn[]
    setColumns: React.Dispatch<any>
  }

export const Context = createContext<ContextType>({ 
    columns: ContextColumns,
    setColumns: ()=>{}
});  

const App = (): JSX.Element => {
    const [columns, setColumns] = useState(ContextColumns);
    LocalStorageAPI.updateColumns(columns);

    return (
        <Context.Provider value={{columns, setColumns}}>
            <Wrapper>
                <SideBar Name="Guest" />
                <Desk columns={columns} />
            </Wrapper>
        </Context.Provider>
    );
};

export default App;
