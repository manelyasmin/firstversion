import React from 'react'
import {InnerLayout} from "../styles/LayOut"
import styled from "styled-components"
import Title from "../components/Title";
import web from "../img/design.svg";
import data from "../img/data.svg";
import intelligence from "../img/intelligence.svg";
import ServiceCard from "../components/ServiceCard";
function ServicesSection() {
  return (
    <InnerLayout>
        <ServicesSectionStyled>
        <Title title={"services"} span={"services"}/>
        <div className='services'>
       <ServiceCard
          image={web}
          title={'front-end developer'}
          paragraph={"built and developpe a nice and clean front end user interface using react js "}

          />
        {/*  <div className="mid-card"> */}
          <ServiceCard
          image={data} 
          title={'web scraping '}
          paragraph={"Collection, and Structuring as well as Data Cleansing for Data Preparation"}
 
          />  
         {/*  </div> */}
           <ServiceCard
          image={intelligence}
          title={'Model Development'}
          paragraph={"develop AI solutions in different sectors using different technologies  "}

          />
       
        </div>
        </ServicesSectionStyled>
        
    </InnerLayout>
  )
}


const ServicesSectionStyled=styled.section`
 
.services{
 
  margin-top:2rem;
display:flex;
justify-content:space-between;
@media (max-width:810px){
  display:block;
}
}


`;
export default ServicesSection