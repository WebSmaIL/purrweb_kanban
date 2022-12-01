import React from "react";
import Desk from "./components/Desk/Desk";
// import Footer from './components/Footer/Footer'
import SideBar from "./components/Sidebar/Sidebar";
import { columns } from "./template";
import { Wrapper } from "./style";

const App = (): JSX.Element => {
    let columnsInStorage = localStorage.getItem("columns");
    if (!columnsInStorage) {
        localStorage.setItem("columns", JSON.stringify(columns));
    }

    let columnsLocal = JSON.parse(String(localStorage.getItem("columns")));

    return (
        <Wrapper>
            <SideBar Name="Guest" />
            <Desk columns={columnsLocal} />
            {/* <Footer /> */}
        </Wrapper>
    );
};

export default App;
