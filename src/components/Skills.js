import React from 'react'
import styled from "styled-components";
import {InnerLayout} from "../styles/LayOut";
import Title from "./Title";
import   { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard,Pagination,Navigation } from "swiper";
import tf from "../img/tensorflow.svg"
import python from "../img/python.svg";
import java from "../img/java.svg";
import js from "../img/java-script.svg"
import reac from "../img/react.svg";
import sql from "../img/sql.svg";
import opencv from "../img/opencv.svg"
import flask from "../img/flask.svg";
import cplus from "../img/icons8-c++.svg";
import mongo from "../img/mongo.svg"
import git from "../img/git.svg"
import keras from "../img/keras.svg"
import sl from "../img/index.png"

import{keyframes} from "styled-components";
import {bounce} from "react-animations";
function Skills() {
  
  return (
    /*   
    <SkillsStyled>
    <Title title={'Skills'} span={'Skills'}/>
    <InnerLayout>
      <div className='skills'>
       
          </div>
    </InnerLayout>
    </SkillsStyled> */
    <SkillsStyled>
    <Title title={'Skills'} span={'Skills'}/>
    <InnerLayout>
    <Swiper
        slidesPerView={8}
        spaceBetween={30}
         keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><img src={python} alt='' /></SwiperSlide>
        <SwiperSlide className="java"><img src={java} alt=''/></SwiperSlide>
        <SwiperSlide><img src={tf} alt=''/></SwiperSlide>
        <SwiperSlide><img src={js} alt=''/></SwiperSlide>
        <SwiperSlide><img src={sql} alt=''/></SwiperSlide>
        <SwiperSlide><img src={reac} alt=''/></SwiperSlide>
        <SwiperSlide><img src={opencv} alt=''/></SwiperSlide>
        <SwiperSlide><img src={flask} alt=''/></SwiperSlide>
        <SwiperSlide><img src={cplus} alt=''/></SwiperSlide>
        <SwiperSlide><img src={mongo} alt=''/></SwiperSlide>
        <div className="git">
         <SwiperSlide ><img src={git} alt=''/></SwiperSlide>
         </div>
      </Swiper>
       </InnerLayout>
      </SkillsStyled>
    
  )
}



const SkillsStyled=styled.section`

width:100%;
height:100%;

.mySwiper {
  width: 100%;
  height: 100%;
 
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--background-dark-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
   
  img{
  display: block;
  width: 80px;
  height:80px;
  justify-content: center;
  object-fit: fill;
  padding-bottom: 1rem;
  /* height: 100%; */
 /*   object-fit: contain;  */
  background-color:var(--background-dark-color);
 
&:hover {
    cursor: default;
    transform: rotate(360deg);
    transition: all 0.7s ease-in-out 0s; 
}
}

 
}

`;
export default Skills;