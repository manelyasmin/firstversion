import {createGlobalStyle} from "styled-components";

const GlobalStyles=createGlobalStyle`


:root{
    --primary-color:#577590;
    --primary-color-light:#057FFF;
    --secondary-color:#6c757d;
    --background-dark-grey:#191d2b;
    --border-color:#866e9b;
    --background-light-color:#edf6f9;
    --particle-color:#9a8c98;
    --scrollbar-bf-color:#383838;
    --scrollbar-thump-color:#6b6b6b;
    --scrollbar-track-color:"#383838";


}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito',sans-serif;
    font-size: 1rem;

}

body{
    background-color:var(--background-light-color);
    
   /*  color:var(--font-light-color); */
}

a{
    font-family: inherit;
    color:inherit;
    font-size: inherit;

}


h1{

    font-size:5rem;
    color:#866e9b;
    @media only screen and (max-width: 830px) {
        font-size:3rem;
      } 
    span{
        @media only screen and (max-width: 830px) {
        font-size:2rem;
      } 
        font-size:3rem;
        color:#f4a261;
    }

}

h3{

    font-size:2rem;
    color:black;
    @media only screen and (max-width: 830px) {
        font-size:1rem;
      } 
     

}


`;


export default GlobalStyles;