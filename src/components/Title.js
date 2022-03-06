import React from 'react'
import styled from "styled-components";
function Title({title,span}) {
  return (
    <TitleStyled>
        <h2>
            {title}
                <span>
                    {span}
                </span>
        </h2>

    </TitleStyled>
  )
}
const TitleStyled=styled.div`
    position:relative;
    margin-top:0.2rem;
    width:100%;
    h2{
        color:var(--white-color);
        font-size: 2rem;
        font-weight: 600;
        margin-top: 0.4rem;
        text-transform: uppercase;
       position:relative; 
       /*  padding-bottom: 0.7rem; */
        &::before{
            content:"";
            position: absolute;
            /* margin-top: 0.4rem; */
            bottom: 0;
            width:7.4rem;
            height: .2rem;
            background-color:var(--background-light-color);
            border-radius: 15px;
            left:0;
        }

        &::after{
            content:"";
            position: absolute;
            bottom: 0;
            width:4rem;
            height: .33rem;
            background-color:var(--primary-color);
            border-radius: 15px;
            left:0;

        }

        span{
            font-weight:900 ;
            color:rgba(25,29,43,44);
            font-size: 4rem;
            left:0;
            top:15%;
            z-index: -1;
            position:absolute;



        }

    }
`;
export default Title