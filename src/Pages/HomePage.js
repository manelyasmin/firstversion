import React from 'react'
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

function HomePage() {
  
  return (
    
    <HomePageStyled  >
        <div className="particles-container"  >
        
   {/*     <Particle  /> */}
        
  
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
            
             
          </div>
   
       <div className="typographie">
          <h1>Hi I am <span>Manel Yasmine</span></h1>
          <h3>
          i am a data scientist and software Engineering 
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
 /* @media only screen and (max-width: 830px) {
      

      }  */
.typographie{
  align-items:center;
  padding-top:40%;
   left:50%;
  position:absolute; 
  transform:translate(-50%,-50%);
  text-align:center;
  width:50%;
  h3{
    font-weight:400;
    opacity: 0.7;
     
  }
   
  
}

.icons{
  
    display:grid;
    justify-content:center;
   position:absolute;
   top:18rem;
   left:2rem;
    
    .i-facebook{
      border:1px solid var(--border-color);
       
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      transition:all .4s ease-in-out;
      cursor:pointer;
      margin-top:1rem;
    
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
        margin:.5rem;

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
    
      &:hover{
        background-color:4px solid var(--primary-color-light);
        border:2px solid #86888a;
        color:#86888a;
      }
  }

      
     


     
  }  


`;
export default HomePage;
