import React from "react";
import Desk from "./components/Desk/Desk";
import SideBar from "./components/Sidebar/Sidebar";
import { Wrapper } from "./style";
import { IColumn } from './interfaces/baseInterfaces'

const columns: IColumn[] = [
    {
        id: 1,
        name: 'TODO',
        cards: []
    },
    {
        id: 2,
        name: 'In Progress',
        cards: []
    },
    {
        id: 3,
        name: 'Testing',
        cards: []
    },
    {
        id: 4,
        name: 'Done',
        cards: []
    }
]


const App = (): JSX.Element => {
    let columnsFromStorage = JSON.parse(String(localStorage.getItem("columns")));
    if (!columnsFromStorage) {
        localStorage.setItem("columns", JSON.stringify(columns));
        columnsFromStorage = columns;
    }

    return (
        <Wrapper>
            <SideBar Name="Guest" />
            <Desk columns={columnsFromStorage} />
            {/* <Footer /> */}
        </Wrapper>
    );
};

export default App;
