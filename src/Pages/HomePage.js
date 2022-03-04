import React from 'react'
import styled from "styled-components"
import Articles from "../components/Articles";
import Particles from '../components/Particle';
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
/* import Particles from "react-tsparticles";/*  */
/* import particlesOptions from "./particles.json";  */ 
function HomePage() {
  return (
    <HomePageStyled>
        <div className="p-particles">
          <Particles />

        </div>
        <div className="typographie">
          <h1>Hi I am <span>Manel Yasmine</span></h1>
          <p>
          i am a data scientist and front end developer
          </p>
          <div className="icons">
              <div className="icon i-facebook">
                <FacebookIcon/>
              </div>
              <div className="icon i-github">
                  <GithubIcon/>
              </div>
              <div className="icon i-linkedin">
                <LinkedinIcon/>
              </div>
          </div>
        </div>
    </HomePageStyled>
  )
}

const HomePageStyled=styled.header`
width:100%;
height:100vh;
position:relative;
  .p-particles{
    
    position:absolute;
    top:0;
    left:0;

  }
.typographie{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  text-align:center;
  width:80%;
  .icons{
    display:flex;
    justify-content:center;
    //this margin top between icons and writing
    margin-top:1rem;
    
    .icon{
      border:1px solid var(--border-color);
      display:flex;
      align-tems:center;
      justify-content:center;
      border-radius:50%;
      transition:all -4s ease-in-out;
      cursor:pointer;
        &:not(:last-child){
        margin-right:1rem;
        
      }
      &:hover{
        background-color:2px solid var(--primary-color);
        color:var(--primary-color);
     }
      //this one for the margin between icon and other
    
      //this margin for all icon is for icon and circle 
      svg{
        margin:0.5rem;

      }
     /*  flex-direction:column; */
      /* 
      display:inline-block;
      */
    }
  }
}

`;
export default HomePage