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
                  
            {/* 
                  <div className="lines">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
                </div>   */}
                {/* routing part  */}
          
               <Routes>
               <Route path="/" exact element={<HomePage/>}>
                  
                </Route>
                    <Route path="/about"element={<AboutPage/>}></Route>
                    <Route path="/resume" element={<ResumePage/>}></Route>
                    <Route path="/portfilios" element={<PortfoliosPage/>}></Route>
                    <Route path="blogs" element={<BlogPage/>}></Route>
                    <Route  path="/contact" element={<ContactPage/>}></Route>
               </Routes>
                 
                   
              
                
                
                   
</MainContentStyled> 
        </div>
        
    );
}


const MainContentStyled=styled.main`

margin-left:16.3rem;
min-height: 100vh;
position:relative;

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
