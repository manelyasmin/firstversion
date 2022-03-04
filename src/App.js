import React from 'react';
import SideBar from './components/SideBar';
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
/* import Particles from "react-tsparticles";

import particlesOptions from "./particles.json"; */

function App() {
    return (
        <div className="App">
           {/*  <Particles options={particlesOptions}/> 
            */}     <SideBar></SideBar>
                <MainContentStyled>
                 
                <div className="lines">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
                </div>
                <HomePage/>
                
                </MainContentStyled>  
        </div>
        
    );
}


const MainContentStyled=styled.main`
position:relative;
margin-left:16.3rem;
min-height: 100vh;
 

.lines{
    position:absolute;
    min-height:100vh;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    .line-1, .line-2,.line-3, .line-4{
        width:1px;
        min-height:100vh;
        background-color:var(--border-color);
    }
}
`;

export default App;
