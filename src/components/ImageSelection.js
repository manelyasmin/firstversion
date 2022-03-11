import React from 'react'
import styled from "styled-components";
import resume from "../img/img5.jpg";
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
Hi, my name is Jasmine and I work as  data scientist/front-end developer.I hold a Bachelor’s and Master’s degree in computer science.Since I was young,
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
margin-top:1em;
display:flex;
width: 100%;
 
.left-content{
    width: 50%; 
     
    img{
         
        margin-top: 1rem; 
        width:90%;
        object-fit: cover;

    }
}
.right-content{
     margin-top: 1rem; 
  
    h4{
        font-size: 2rem;
         
        span{
        font-size:2rem;
        color:var(--primary-color);
        }
       

    }
  
          p{
                padding:.3em 0;
                font-size:1.6rem;
                font-weight:600;
            }
            

        

    }
}

}
`;
export default ImageSelection