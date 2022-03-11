import React from 'react';
import SideBar from './components/SideBar';
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import BlogPage from "./Pages/BlogPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage"
import {Routes,Route, BrowserRouter} from "react-router-dom";
import {Link } from "react-router-dom"; 




function App() {
    return (
        <div className="App">
            <SideBar/>
            
            <MainContentStyled > 
                  
        
             
                {/* routing part  */}
          
            <Routes>
               <Route path="/" exact element={<HomePage/>}>
                  
                </Route>
                    <Route path="/about"element={<AboutPage/>}></Route>
                   
                    <Route path="/portfilios" element={<PortfoliosPage/>}></Route>
                   
                    <Route  path="/contact" element={<ContactPage/>}></Route>
               </Routes> 
                 
                   
            
                
                   
</MainContentStyled>  
        </div>
        
    );
}


const MainContentStyled=styled.main`

/* margin-top:4rem;
width:100%; */
/* min-width: 100vw; */
position:relative;

/*  .lines{
    position:absolute;
    min-height:100%;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    .line-1, .line-2,.line-3, .line-4{
        width:1px;
        min-height:100vh;
        background-color:var(--border-color);
    }
} */  
`;

export default App;
