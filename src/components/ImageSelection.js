import React from 'react'
import styled from "styled-components";
import resume from "../img/personel.jpg";
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
hello i am manel yasmine i am a data scientist and 
front end developper i enjoy </p>

        <div className='about-info'>
            <div className='info-title'>
               <p>Full Name : </p> 
                <p> Age : </p>
                <p> language : </p>
                <p> Nationality: </p>
                <p>Location : </p>
                <p>service: </p>
            </div>



            <div className='info'>
               <p>: hammouche manel yasmine </p> 
                <p>25 years old</p>
                <p>French/English/Arabic</p>
                <p>algerinne</p>
                <p>Algeria</p>
                <p>Data Scientis / Front End Developper</p>
            </div>

    </div>
    <PrimaryButton title={'Download CV'}/>
</div>
</div>
    </ImageSectionStyled>
  )
}


const ImageSectionStyled=styled.div`
.all-content{
margin-top:1em;
display:flex;
width: 100%;
.left-content{
    width: 100%; 
    img{
         
        margin-top: 1rem; 
        width:90%;
        object-fit: cover;

    }
}
.right-content{
   /*  margin-top: 10%;  */
   /*   width:50%;
   */
   /*  width:100%; */ 
    h4{
        font-size: 2rem;
         
        span{
        font-size:2rem;
        color:var(--primary-color);
        }
       

    }
    .paragraphy{
                padding:.5rem 0;
        }
    .about-info{
        display:flex;
        padding-bottom: 1rem;
        .info-title{
            padding-right: 3rem;
            p{
                font-weight: 600;

            }

        }
        .info-title .info{
            p{
                padding:.3em 0;
            }
            

        }

    }
}

}
`;
export default ImageSelection