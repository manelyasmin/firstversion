import React from 'react'

import styled from "styled-components"
import {MainLayout,InnerLayout} from "../styles/LayOut";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
 import MailIcon from '@material-ui/icons/Mail';
 import LocationOnIcon from '@material-ui/icons/LocationOn';

import ContactItem from "../components/ContactItem";
import AnimationPage from '../components/AnimationPage';
function ContactPage() {
  return (
       <MainLayout>
    <Title title={'contact'} />
    <ContactStyled>
    <InnerLayout className={"contact-section"}>
       <div className="left-content">
       <div className="contact-title">
       
       <h4>Get In Contact</h4>
       </div>
       
            <form className="form">
                  <div className="form-field">
                      <label htmlFor="name" >Enter your name</label>
                      <input type="text" id="name"/>
                  </div>


                   <div className="form-field">
                      <label htmlFor="email" >Enter your email</label>
                      <input type="text" id="email"/>
                      
                  </div>

                  <div className="form-field">
                      <label htmlFor="subject" >Enter your subject</label>
                      <input type="text" id="subject"/>
                      
                  </div>

                  <div className="form-field">
                      <label htmlFor="text-area">Enter your message</label>
                       <textarea name="textarea" id="textarea" cols="30" rows="10"/>

                  </div>

                  <div className="form-field f-button">
                  <PrimaryButton title={'send Email'}/>
                  </div>
            </form>      
      </div>
       <div className="right-content">
       <ContactItem 
       icon={<LocalPhoneIcon/>}
       title={'Phone'}
       contact1={'+213665036182'}
    
      />

<ContactItem 
       icon={<MailIcon/>}
       title={'Email'}
       contact1={'hammouchemanel1@gmail.com'}
      
      />

<ContactItem 
       icon={<LocationOnIcon />}
       title={'Location'}
       contact1={'Algeria'}
      
      />
            
       
       </div>
    </InnerLayout>
    </ContactStyled>
    </MainLayout>
  
  )
}

const ContactStyled=styled.section`

.contact-section{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-column-gap: 2rem;
  .contact-title{
    h4{
      color:var(--color-white);
      padding:1rem 0;
      font-size:1.8rem;
    }
  }
  .form{
    width:100%;

    .form-field{
      margin-top:2rem;
      position:relative;
      width:100%;
      label{
        position:absolute;
        left:20px;
        top:-12px;
        display:inline-block;
        background-color:var(--background-dark-color);
        padding:0 .5rem;
        color:inherit;
      }
      input{
        border:1px solid var(--border-color);
        outline:none;
        background:transparent; 
        height:50px;
        padding :0 15px;
        width:100%;
      }
      textarea{
        background:transparent;
        border:1px solid var(--border-color);
        outline:none;
        color:inherit;
        width:100%;
        padding:.8rem 1rem;

      }
    }


  }
  .right-content{
      
      display: flex;
      flex-direction: column;
      /* margin-top: 4rem; */
  }
} 
`;
export default ContactPage;