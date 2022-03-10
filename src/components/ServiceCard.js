import React from 'react';
import styled from "styled-components";
function ServiceCard({image,title,paragraph}) {
  return (
    <ServiceCardStyled>
      <div className="container">
          <img src={image} alt=''/>
          <h4>{title}</h4>
          <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  )
}
const ServiceCardStyled=styled.div`

background-color:var(--background-dark-grey);
 
border-left:1px solid var(--border-color);
border-top:8px solid var(--border-color);
border-right:1px solid var(--border-color);
border-bottom:1px solid var(--border-color);
transition:all .4s ease-in-out;
 margin :1rem 1.2rem; 
  &:hover{
    border-top:8px solid var(--primary-color);
    transform :translateY(3px);
  }
.container{
  padding:1rem;
 
  

  h4{
    color:var(--white-color);
    font-size: 1rem;
    padding:1rem 0;
    margin:0 .5rem;
   position: relative; 
    /* padding-bottom: 1rem; */
    &::after{
      content: "";
      width:4rem;
      background-color: var(--border-color);
      height:3px;
     position: absolute; 
      left: 0;
      bottom: 0;
      border-radius:10px;

    }
  }
  p{
    padding:.8rem 0;

  }
}
`;
export default ServiceCard