import React from 'react'
import styled from "styled-components";
function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyled>
        {title}
    </PrimaryButtonStyled>
  )
}
const PrimaryButtonStyled=styled.a`

  background-color: var(--particle-color);
  color:black;
  border-radius:25px;
  justify-content:center;
  font-size:inherit;
  text-transform:uppercase;
  padding:.8rem 2.5rem;
  margin-top:1rem;
  cursor:pointer;
  display: inline-block;
  text-transform:uppercase;
  position:relative;
transition: all .4s ease-in-out;
&::after{
    content:"";
    position:absolute;
    width:0;
    height: .2rem; 
    transition: all .4s ease-in-out;
    left:0;
    bottom:0;
    opacity:.7;
  }
  &:hover::after{
  
    width:100%;
   
    background-color: var(--primary-color);
   

  }


`;
export default PrimaryButton