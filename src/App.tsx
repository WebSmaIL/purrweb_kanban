import React from "react";
import Desk from "./components/Desk/Desk";
// import Footer from './components/Footer/Footer'
import Header from "./components/Sidebar/Sidebar";
import { columns } from "./template";
import Style from "./style";

const App = (): JSX.Element => {
    let columnsInStorage = localStorage.getItem("columns");
    if (!columnsInStorage) {
        localStorage.setItem("columns", JSON.stringify(columns));
    }

    let columnsLocal = JSON.parse(String(localStorage.getItem("columns")));

    return (
        <Style.Wrapper>
            <Header Name="Guest" />
            <Desk columns={columnsLocal} />
            {/* <Footer /> */}
        </Style.Wrapper>
    );
};

export default App;
