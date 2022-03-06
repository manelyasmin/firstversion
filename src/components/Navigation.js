import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import avatar from "../img/ava1.png"
function Navigation() {
  return (
    <NavigationStyled>
        <div className='avatar'>
            <img src={avatar} alt=""/>
        </div>
        <ul className='nav-items'>
            <li className='nav-item'>
                <NavLink to="/" 
                   className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} >Home </NavLink>
               {/*   "active-class"+(!isActive ? "unselected" : "" )
                */} 
               
                    
            </li>

            <li className='nav-item'>
                <NavLink to="/about"  
                   className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    About 
                </NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to="/resume"  
                 className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
             
                    Resume
                </NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to="/portfilios"  
                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    Portfilios
                </NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to="/blogs"  
                  className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    Blogs
                </NavLink>
            </li>


            <li className='nav-item'>
                <NavLink to="/contact"  
               className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                   Contact
                </NavLink>
            </li>
        </ul>

        <footer className='footer'>
            <p>
                @2022 My Portfolio Website
            </p>
        </footer>
    </NavigationStyled>
  )
}

const NavigationStyled=styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right:1px solid var(--border-color);;
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding:0.4rem 0;
        img{
            width:60%;
            border-radius: 50%;
            border:8px solid var(--border-color);
        
            
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        .activated {
            background-color: red;
            color:#fff;
        }
        li{
            display:block;
                a{
                    display:block;
                    padding: .45rem 0;
                    position: relative;
                    z-index: 4;
                    text-transform: uppercase;
                    transition: All 0.4s   cubic-bezier(1,-0.2,.25,.95) ;
                    font-weight: 600;
                    letter-spacing: 1px ;
                    &:hover{
                        cursor:pointer;

                    }
                    &::before{
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 50%;
                        background-color:var( --primary-color);
                        z-index: 3;
                        opacity:0.21;
                       /*  transform-origin: right; */
                    }

                }
                a:hover::before{
                    width: 100%;
                    height: 100%;
                }
        }

    }

    footer{
        border-top:1px solid var(--border-color);
        width:100%;

        p{
            padding:2rem 0;
            font-size: 1.1rem;
            display:block;
            text-align: center;



        }
    }

`;
export default Navigation