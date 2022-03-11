import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import avatar from "../img/ava1.png"
function Navigation() {
  return (
    <NavigationStyled>
       {/*  <div className='avatar'>
            <img src={avatar} alt=""/>
        </div> */}
        <ul className='nav-items'>
            <li className='nav-item'>
                <NavLink to="/" 
                   className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} >{"<"}Home{"/>"} </NavLink>
               {/*   "active-class"+(!isActive ? "unselected" : "" )
                */} 
               
                    
            </li>

            <li className='nav-item'>
                <NavLink to="/about"  
                   className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    {"<"}About{"/>"}
                </NavLink>
            </li>

         

            <li className='nav-item'>
                <NavLink to="/portfilios"  
                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    {"<"}Portfilios{"/>"}
                </NavLink>
            </li>

        


            <li className='nav-item'>
                <NavLink to="/contact"  
               className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                   {"<"}Contact{"/>"}
                </NavLink>
            </li>
        </ul>

     {/*    <footer className='footer'>
            <p>
                @2022 My Portfolio Website
            </p> 
        </footer>*/}
    </NavigationStyled>
  )
}

const NavigationStyled=styled.header`
background-color:transparent;

.nav-items{
     
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%; 
    width:100%;
    
        li{
            display:block;
            padding:2rem ;
            .activated{
        /*  background-color: var(--secondary-color); */
            color:var(--particle-color);
        }
                a{
                    display:block;
                   padding: 1rem ;
                    position: relative;
                    z-index: 4; 
                    text-transform: uppercase;
                    transition: All 0.4s   cubic-bezier(1,-0.2,.25,.95) ;
                    font-weight: 600;
                    letter-spacing: .5rem ;
                    &:hover{
                        cursor:pointer;
                        color:var( --primary-color);

                    }
                    &::before{
                        content: "";
                        position: absolute;
                       /*  bottom: 0;
                        left: 0;
                        width: 0; */
                       /*   */
                        background-color:var(--secondary-color);
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
    } 

    /*  footer{
       border-top:1px solid var(--border-color);
        width:100%;

        p{
            padding:2rem 0;
            font-size: 1.1rem;
            display:block;
            text-align: center;



        }
    } */

`;
export default Navigation