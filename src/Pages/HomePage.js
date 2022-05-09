import React,{useState,Linking}   from 'react'
import styled from "styled-components" 
import Particle from '../components/Particle';
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
/* import Particles from "react-tsparticles";/*  */
import Particles from "react-tsparticles";
import PrimaryButton from "../components/PrimaryButton"
/* import particlesOptions from "./particles.json";  */ 
import AnimationPage from '../components/AnimationPage';
import arrow from "../img/arrow.svg";
import MailIcon from '@material-ui/icons/Mail';
function HomePage() {
  
  return (
    
    <HomePageStyled  >
        <div className="particles-container"  >
        
{/*  <Particle  />   */}
        
  
  </div>
  <div className="icons">
             
            
             <a href="https://www.facebook.com/profile.php?id=100015130292800" className="i-facebook">
                <FacebookIcon/>
              </a>
           
             
              <a href="https://github.com/manelyasmin" className="i-github">
                  <GithubIcon/>
              </a>
           
           
             <a href="https://www.linkedin.com/in/manel-yasmine-hammouche-784217171/" className="i-linkedin">
                <LinkedinIcon/>
              </a>
            
             <a className="i-mail"   > 
                <MailIcon onClick={"showme "}  >
                 
                </MailIcon>
                   {/* <span visible={false}> hammouchemanel1@gmail.gom </span>  */}
              
              </a>
          </div>
   
       <div className="typographie">
          <h1>Hi I am <span>Manel Yasmine</span></h1>
          <h3>
          i am a data scientist and software Engineer 
          </h3>
         
          <PrimaryButton  title={'Download CV'}  />
         
 
        </div>   
    </HomePageStyled>
 
  )
}

const HomePageStyled=styled.header`
width:100%;
height:100%;
background-color:2px solid var(--primary-color-light);
position:relative;
 
.typographie{
  align-items:center;
 /*  padding-top:40%; */
   left:50%;
  position:absolute; 
  transform:translate(-50%,-50%);
  text-align:center;
  /* width:50%; */
  top:30vh;
  @media only screen and (max-width: 810px) {
 
top:25vh;
    }  

@media only screen and (max-width: 600px) {
 
top:30vh;
    }  
   
   
  
}

.icons{
  
    display:grid;
    justify-content:center;
   position:absolute;
   top:10rem;
   left:2rem;
   @media only screen and (max-width: 810px) {
    display:flex;
    justify-content:center;
    align-items:center;
 height:60vh;
 width:93vw;
    
    }   
    @media only screen and (max-width: 600px) {
    display:flex;
    justify-content:center;
    align-items:center;
 height:70vh;
 width:93vw;
    
    }   
    @media only screen and (max-width: 484px) {
    display:flex;
    justify-content:center;
    align-items:center;
 height:70vh;
 width:93vw;
    
    } 
    .i-mail{border-radius:50%;
       border:1px solid var(--border-color);  
       
       display:flex;
      align-items:center;
      justify-content:center;
      
      transition:all .4s ease-in-out;
      cursor:pointer;
      margin-top:1rem;
      @media only screen and (max-width: 810px) {
        margin-right:1rem;
      }
      &:hover{  
       
        background-color:2px solid var(--primary-color-light);
        border:2px solid #4267B2;
        color:#4267B2;
        
      
    }
    }
    .i-facebook{
      border:1px solid var(--border-color);
       
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      transition:all .4s ease-in-out;
      cursor:pointer;
      margin-top:1rem;
      @media only screen and (max-width: 810px) {
        margin-right:1rem;
      }
      &:hover{
        background-color:2px solid var(--primary-color-light);
        border:2px solid #4267B2;
        color:#4267B2;
      
    }
  }
  .i-github{
      border:1px solid var(--border-color);
       
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      transition:all .4s ease-in-out;
      cursor:pointer;
      margin-top:1rem;
      @media only screen and (max-width: 810px) {
        margin-right:1rem;
      }
      &:hover{
        background-color:4px solid var(--primary-color-light);
        border:2px solid #5f4687;
        color:#5f4687;
      }
  }
     
      /*   &:not(:last-child){
        margin-right:1rem;
        
      } */
   /*   &:hover{
        background-color:4px solid var(--primary-color-light);
        color:var(--primary-color-light);
     } */ 
      //this one for the margin between icon and other
    
      //this margin for all icon is for icon and circle 
       svg{
        margin:.8rem;

      }  
     /*  flex-direction:column; */
      /* 
      display:inline-block;
      */
    } 
  
    .i-linkedin{
      border:1px solid var(--border-color);
       
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      transition:all .4s ease-in-out;
      cursor:pointer;
      margin-top:1rem;
      @media only screen and (max-width: 810px) {
        margin-right:1rem;
      }
      &:hover{
        background-color:4px solid var(--primary-color-light);
        border:2px solid #86888a;
        color:#86888a;
      }
  }

      
     


     
  }  


`;
export default HomePage;
