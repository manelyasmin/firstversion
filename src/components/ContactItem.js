import React from 'react'
import styled from "styled-components";
function ContactItem({icon,title,contact1}) {
  return (
    < ContactItemStyled>
      <div className="left-content">
         
      {icon}
         
 
      </div>
      
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        
      </div>
    </ContactItemStyled>
  )
}



const ContactItemStyled=styled.div`
  padding:1.5rem 2rem;
  background-color: transparent;
  display: flex;
  margin-top: 3rem;
  align-items: center;
/* &:not(:last-child){
  margin-bottom: 2rem;
} */
  .left-content{
    padding:1.5rem;
    border: 1px solid transparent;
    font-size:2rem;
    margin-right: 1.5rem;
    align-items: center;
    justify-content: center;
    
    svg{
      
      font-size:2.3rem;
    /*   display:flex; */
  
      

    }

  }
  .right-content{
h6{
  color:var(--white-color);
  font-size:1.2rem;
  padding-bottom:.6rem;

}
p{
  padding: .4rem 0;

}
  }
  
`;

export default ContactItem