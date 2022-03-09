import React from 'react'
import styled from "styled-components";
import {MainLayout} from "../styles/LayOut";
import Title from "../components/Title";
import ImageSelection from '../components/ImageSelection';
import ServicesSection from '../components/ServicesSection';



function AboutPage() {
  return (
  
<MainLayout> 
    <ABoutStyled>
        <Title title={"about me"} span={"about me"}/>
     <ImageSelection/>
          <ServicesSection/>
    </ABoutStyled>
    </MainLayout>
            
  
  )
}

const ABoutStyled=styled.section`
`;
export default AboutPage