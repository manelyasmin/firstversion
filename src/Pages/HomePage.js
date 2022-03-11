import React from 'react'
import styled from "styled-components" 
import Particle from '../components/Particle';
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
/* import Particles from "react-tsparticles";/*  */
import Particles from "react-tsparticles";
/* import particlesOptions from "./particles.json";  */ 
function HomePage() {
  
  return (
    <HomePageStyled  >
        <div className="particles-container"  >
        
        <Particle  />
  
  </div>
       
       <div className="typographie">
          <h1>Hi I am <span>Manel Yasmine</span></h1>
          <h3>
          i am a data scientist and front end developer
          </h3>
          <div className="icons">
              <a href="https://www.facebook.com/profile.php?id=100015130292800" className="icon i-facebook">
                <FacebookIcon/>
              </a>
              <a href="https://github.com/manelyasmin" className="icon i-github">
                  <GithubIcon/>
              </a>
              <a href="https://www.linkedin.com/in/manel-yasmine-hammouche-784217171/" className="icon i-linkedin">
                <LinkedinIcon/>
              </a>
          </div>
        </div> 
    </HomePageStyled>
  )
}

const HomePageStyled=styled.header`
width:100%;
height:100%;
background-color:2px solid var(--primary-color-light);
.typographie{
  align-items:center;
  padding-top:40%;
   left:50%;
  position:absolute;
  /* top:50%;
  left:50%; */
  transform:translate(-50%,-50%);
  text-align:center;
  width:50%;
  .icons{
    display:flex;
    justify-content:center;
    //this margin top between icons and writing
    margin-top:1rem;
    
    .icon{
      border:1px solid var(--border-color);
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      transition:all .4s ease-in-out;
      cursor:pointer;
        &:not(:last-child){
        margin-right:1rem;
        
      }
      &:hover{
        background-color:4px solid var(--primary-color-light);
        color:var(--primary-color-light);
     }
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
    .i-github{
      &:hover{
        border:2px solid #5f4687;
        color:#5f4687;;
      }
    }


      .i-linkedin{
      &:hover{
        border:2px solid #86888a;
        color:#86888a;
      }
    }


      .i-facebook{
      &:hover{
        border:2px solid #4267B2;
        color:#4267B2;
      }
    }
  }  
}

`;
export default HomePage;
