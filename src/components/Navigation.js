import React,{useState}  from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import avatar from "../img/logoFirst.png"
import MailIcon from '@material-ui/icons/Mail';
import bar from "../img/bars-solid.svg";
import {FaBars,FaTimes} from "react-icons/fa";

import { HeaderImg,IconEmail,NavBarContainer,NavBarWrapper,IconLogo,MenuItemLink,MenuItem,Menu ,IconopenMobile} from './Navigation.element'
function Navigation() {
    const [click,setClick]=useState(false);
    const changeClick=() => {
        setClick(!click);
        console.log(click);
    }
return (<div> 
    {/* <NavigationStyled> */}
        
      {/* <div className="navigationAll">  */}
       
      <NavBarContainer>
          <NavBarWrapper>
               
        <IconLogo><HeaderImg src={avatar} /></IconLogo> 
        <IconopenMobile onClick={changeClick}>{
                         click ? <FaTimes/>  : <FaBars/> 
                     } </IconopenMobile> 
        
        
        {/* <ul className='nav-items'   > */}
        <Menu click={click}>
           {/*  <li className='nav-item'> */}
                <MenuItem onClick={changeClick}>
                <MenuItemLink >
                <NavLink to="/" 
                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} >{"<"}Home{"/>"} 
                  </NavLink>
                </MenuItemLink >
                </MenuItem>
               
           {/*  </li> */}

            {/* <li className='nav-item'> */}
                <MenuItem onClick={changeClick}>
                <MenuItemLink > 
                <NavLink to="/about"  
                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    {"<"}About{"/>"}
                </NavLink>
                </MenuItemLink >
                </MenuItem>
            {/*  </li> */}

         

            {/* <li className='nav-item'> */}
            <MenuItem onClick={changeClick}><MenuItemLink >

                <NavLink to="/portfilios"  
                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    {"<"}Portfilios{"/>"}
                </NavLink></MenuItemLink >
          {/*   </li> */}
          </MenuItem>

        
         
              </Menu>
           {/*  </ul> */}
         
                     
{/* <div className="hamburger" onClick={()=>{
    const hamburger=document.querySelector(".hamburger");
    const navItems=document.querySelector(".nav-items"); 
 console.log(navItems)
hamburger.addEventListener("click",()=>{
     hamburger.classList.toggle("active");
     navItems.classList.toggle("active");
  
    })
     } 
}
>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </div> */}
          </NavBarWrapper>
    </NavBarContainer>
    </div>
        /*  </div>
    </NavigationStyled> */
  )
}

/* const NavigationStyled=styled.header`
background-color:transparent;

.navigationAll{
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;


  img{
      width:2.5rem;
      margin-left:2rem;
  
  @media only screen and (max-width: 930px) {
       
          display:none;

      
  }
  }
  .hamburger{

    display:none;
    cursor:pointer; 
  
     .bar{
    display:block;
    width:25px;
    height:3px;
    margin:5px;
    
    -webkit-transition:all 0.3s ease-in-out;
    background-color:black;
  
    
}

   
}
 @media only screen and (max-width: 930px) {
      .hamburger{
          display:block;
            cursor:pointer; 
             
      }
     /*  .nav-items{
          display:block;
      } */
       /*  .hamburger.active .bar:nth-child(2) {
            opacity:0
        }
        .hamburger.active .bar:nth-child(1){
            transform:translateY(8px) rotate(45deg);
        }
         .hamburger.active .bar:nth-child(3){
            transform:translateY(-8px) rotate(-45deg);
        }
        
     }
.nav-items{
    @media only screen and (min-width: 930px) {
    display:flex;
    justify-content:center;
     
    height:100%; 
    width:100%;
    }
    @media only screen and (max-width: 930px) {
        display:none
    }

        .i-mail{
      display:flex;
      align-items:center;
      justify-content:center;
     @media only screen and (max-width: 930px) {
       
          display:none;
  
      
  }
    }
    
        li{
            display:block;
            padding:1rem ;
      
            .activated{*/
        /*  background-color: var(--secondary-color); */
          /*  color:#f4a261;
        }
                a{
                    display:block;
                   padding: 1rem ;
                    position: relative;
                    z-index: 1; 
                    text-transform: uppercase;
                    transition: All 0.4s   cubic-bezier(1,-0.2,.25,.95) ;
                    font-weight: 400;
                    letter-spacing: .1rem ;
                    &:hover{
                        cursor:pointer;
                        color:#866e9b;

                    }
                    &::before{
                        content: "";
                        position: absolute;*/
                       /*  bottom: 0;
                        left: 0;
                        width: 0; */
                       /*   */
               /*         background-color:var(--secondary-color);
                         opacity:0.2;
                        width:0;
                        bottom:0;
                        left:0; 
                    }
  
                }
               a:hover::before{
                    width: 100%;
                    height: 100%;
                     
                }  
      

     

      
  }
    
}
      @media only screen and (max-width: 930px) {
             
            .nav-items.active{
                 flex-direction:column;
            
           gap:0;  
           flex-direction:column;
           width:100%;
           text-align:end;
           transition:0.3s;
            }

      
  }
 }


`; */
export default Navigation