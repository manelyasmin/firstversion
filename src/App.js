import React from 'react';
import SideBar from './components/SideBar';
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";

import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage"
import {Routes,Route, BrowserRouter} from "react-router-dom";
import {Link } from "react-router-dom"; 

import {motion} from "framer-motion";
import {AnimatePresence} from "framer-motion"
import {useLocation} from "react-router"
function App() {
    const location=useLocation();
    return (
        <div className="App">
         
            <SideBar/>
            
            <MainContentStyled > 
                  
        
             
                {/* routing part  */}
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
               <Route path="/firstversion" exact element={<HomePage/>}>
                  
                </Route>
                    <Route path="/about"element={<AboutPage/>}>
                    </Route>
                   
                    <Route path="/portfilios" element={<PortfoliosPage/>}></Route>
                   
                    {/* <Route  path="/contact" element={<ContactPage/>}></Route> */}

                    
               </Routes> 
               </AnimatePresence>
                   
            
                
                   
</MainContentStyled>  

        </div>
        
    );
}


const MainContentStyled=styled.main`
/* 
 margin-top:5rem;
 width:100vw; */
/* width:100%;  */
/* min-width: 100vw; */
position:relative;
 
`;

export default App;
