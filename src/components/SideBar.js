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
    width:16.3rem;
    position: fixed;
    height:100vh;
    background-color: var(--sidebar-dark-color);

`;
export default SideBar;