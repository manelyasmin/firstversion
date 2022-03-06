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

  background-color: var(--primary-color);
  padding: .5rem 2rem;
  margin-top: 2rem;
  margin-left: 5rem;
  color:white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;


`;
export default PrimaryButton