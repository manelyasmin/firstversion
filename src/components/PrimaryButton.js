import React from 'react'
import styled from "styled-components";
import fileServer from "file-saver";
function PrimaryButton({title}) {
    const saveFile=()=>{
    fileServer.saveAs(
      process.env.REACT_APP_CLIENT_URL+"../ressources/ManelResume.pdf",
      "ManelResume.pdf"

    ); 
  }
  return (
    <PrimaryButtonStyled onClick={saveFile()} href="src/ressources/ManelResume.pdf" download>
        {title}
         
    </PrimaryButtonStyled>
  )
}
const PrimaryButtonStyled=styled.a`

  background-color: #383872;
  color:white;
  border-radius:10px;
  justify-content:center;
  font-size:inherit;
  font-weight:600;
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