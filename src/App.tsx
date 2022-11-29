import React from 'react'
import Desk from './components/Desk/Desk'
// import Footer from './components/Footer/Footer'
import Header from './components/Sidebar/Sidebar'
import { columns } from './template'
import Style from './style'

const App = (): JSX.Element => {
    return (
        <Style.Wrapper>
            <Header Name="Guest" />
            <Desk columns={ columns } />
            {/* <Footer /> */}
        </Style.Wrapper>
    )
}

export default App
