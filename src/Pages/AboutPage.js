import React from 'react'
import styled from "styled-components";
import {MainLayout} from "../styles/LayOut";
import Title from "../components/Title";
import ImageSelection from '../components/ImageSelection';
function AboutPage() {
  return (
  
<MainLayout> 
    <ABoutStyled>
        <Title title={"about me"} span={"about me"}/>
        <ImageSelection>

        </ImageSelection>
    </ABoutStyled>
    </MainLayout>
            
  
  )
}

const ABoutStyled=styled.section`
`;
export default AboutPage