import React from 'react'
import styled from "styled-components"; 
import Navigation from "./Navigation"
function SideBar() {
  return (
    <SideBarStyled>

         <Navigation>

        </Navigation> 
    </SideBarStyled>
  )
}


const SideBarStyled=styled.div`
    height:5rem;
    
    width:100vw;
    background-color: transparent;
`;
export default SideBar;