import React from 'react'
import styled from "styled-components";
import resume from "../img/logoFirst.png";
import PrimaryButton from "./PrimaryButton"

function ImageSelection() {
  return (
    <ImageSectionStyled>
        <div className='all-content'>
            <div className='left-content'>
            <img src={resume} alt=""/>
            </div>
        <div className='right-content'>
        <h4> I am Manel<span> Yasmine </span></h4>
        <p className='paragraphy'>
Hi, my name is Jasmine and I work as  data scientist/software engineer.I hold a Bachelor’s and Master’s degree in computer science.Since I was young,
I have always enjoyed to learn new things and enjoying working in new concepts and technologies and always curious to solve real problemes.
Do you want to work together? Please reach out to me by e-mail.
</p>

    </div>
    
</div>
{/*  <PrimaryButton title={'Download CV'}/> */}
    </ImageSectionStyled>
  )
}


const ImageSectionStyled=styled.div`
.all-content{
display:flex;

width: 100%;
height:100%; 

@media( max-width : 810px)
{
    flex-direction:column;
    width:100%;
    height:auto;
    
  
}

.left-content{
   width: 50%;  
   @media( max-width : 810px)
{
    justify-content:center;
    align-items:center;
}
    img{
         height:100%;
         width:100%;
         @media( max-width : 810px)
{
    width:100vw;
    height:70vh; 
}
       

    }
}
.right-content{
    width:50%;
    margin-top: 4rem; 
     /* margin-top: 4rem; 
     margin-right: 3rem;
     margin-top:10rem; */
 
     @media( max-width : 810px)
{   width:100%;
    margin-top: .5rem; 
    align-self:center;
   text-align:flex-start;
   align-items:flex-start;
}
    h4{
        font-size: 2rem;
        font-weight:500;
        @media( max-width : 810px)
{      
   text-align:center; 
}
        span{
        font-size:2rem;
        color:var(--primary-color);
        }
       

    }
  
          p{
           
                padding:.3em 0;
                font-size:18px;
                font-weight:400;
                opacity: 0.8;
 
            }
            

        

    }
}

}
`;
export default ImageSelection