import {createGlobalStyle} from "styled-components";

const GlobalStyles=createGlobalStyle`


:root{
    --primary-color:#007bff;
    --primary-color-light:#057FFF;
    --secondary-color:#6c757d;
    --background-dark-color:#10121a;
    --background-dark-grey:#191d2b;
    --border-color:#2e344e;
    --background-light-color:#f1f1f1;
     --background-light-color:rgba(3,127,255,.3);
    --white-color:#fff;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#191d2b;
    --particle-color:#b5838d;
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
    background-color: var(--background-dark-color);
    color:var(--font-light-color);
}

a{
    font-family: inherit;
    color:inherit;
    font-size: inherit;

}


h1{

    font-size:5rem;
    color:var(--white-color);
    span{
        font-size:3rem;
        color:var(--primary-color);
    }

}

h3{

    font-size:2rem;
    color:var(--background-light-color-2);
     

}


`;


export default GlobalStyles;