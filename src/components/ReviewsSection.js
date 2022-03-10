import React from 'react'
import styled from "styled-components";
import {InnerLayout} from "../styles/LayOut";
import Title from "../components/Title";
import ReviewItem from "../components/ReviewItem";
function ReviewsSection() {
  return (
      
    <ReviewsStyled>
    <Title title={'Reviews'} span={'Reviews'}/>
    <InnerLayout>
    <div className="reviews">
     <ReviewItem 
     text={"Imeme pêoep fjfjjf eer "} 
     />
    </div>
    </InnerLayout>
    </ReviewsStyled>
    
  )
}



const ReviewsStyled=styled.section`
.reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
export default ReviewsSection