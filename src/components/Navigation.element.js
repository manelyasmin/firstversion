import styled from "styled-components"
import avatar from "../img/logoHire2.png"
export const NavBarContainer=styled.div`

width:100%;
height:80px;
position:sticky;
top:0;
z-index:99 ;
background-color:transparent;


`;
/* export const HeaderImg=styled.img.attrs({
    src:`${avatar}`
})
`width:50px;
height:50px;
`; */
 
export const HeaderImg=styled.img`
width:2.5rem;
/* margin-left:2rem; */
`;

export const NavBarWrapper=styled.div` 
margin:auto;
width:100%;
max-width:1300px;
height:100%;
align-items:center;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
 
`;
export const IconLogo=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:center; 
font-size:1.2rem;
color:#cbc88c;
padding-left:1rem;
 
`;
export const IconEmail=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:left;
align-items:center; 
/* padding-right:1rem; */
/* @media screen and (max-width:968px){
 


} */ 
 
`;

export const Menu=styled.ul`
height: 100%;
display: flex;
justify-content:center;
align-items:center;

@media screen and (max-width:810px){
    width:100%;
    height:92vh;
    position:absolute;
    top:80px;
    left:${({click})=>click ? 0 : "-100%"};
    flex-direction:column;
    transition:0.5s all ease-in;
    background-color:#49426c;
    
}

`;

export const MenuItem=styled.li`
height: 100%;
padding:0.5rem 1.5rem;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
.activated {
          color:#f4a261;
        }
&:hover{
     
    cursor:pointer;
    background-color:var(--secondary-color);
    opacity:0.2;
             
     
     
}

 @media screen and (max-width:810px){
width:100%;
height:70px;


}  
`;


export const MenuItemLink=styled.a`
text-decoration: none;
color:#ebc0bb;

`;



export const IconopenMobile=styled.div`
display:none;
@media screen and (max-width:810px){
display: block;
 
color:#ebc88b;

font-size:2rem;
padding-right:1rem;

}


`;
