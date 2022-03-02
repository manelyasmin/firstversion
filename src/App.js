import React from 'react';
import SideBar from './components/SideBar';
import styled from "styled-components"
/* import Particles from "react-tsparticles";

import particlesOptions from "./particles.json";
 */
function App() {
    return (
        <div className="App">
           {/*  <Particles options={particlesOptions}/> */}
                <SideBar></SideBar>
                <MainContentStyled>
                
                
                </MainContentStyled>  
        </div>
        
    );
}


const MainContentStyled=styled.main`

`;

export default App;
