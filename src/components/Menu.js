import React from 'react'
import GithubIcon from "@material-ui/icons/GitHub";
import styled from "styled-components";
function Menu({menuItem}) {
     return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt=""/>
                               
                                        <a href={item.link1}>
                                            <GithubIcon />
                                        </a>
                                
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:2rem;
@media( max-width : 810px)
{ 
    display:block;
    
   
}
.grid-item{
 /*    border-left:1px solid var(--border-color);
border-top:4px solid var(--border-color);
border-right:1px solid var(--border-color);
border-bottom:2px solid var(--border-color); */
transition:all .7s ease-in-out; 
    .portfolio-content{
        display:block;
        position:relative;
        @media( max-width : 810px)
{ 
     
    padding-block: 2rem;
   
}
        h6{
            font-size:1.5rem;
            @media( max-width : 810px)
{ 
    font-size:1rem;
   
}
        }
        img{
            width:100%;
            height:30vh;
            object-fit:cover;
            transition:all .4s ease-in-out; 
      
        a{
                 display:flex;
                 align-items:center;
                 justify-content:center;
               
                 transition:all .4s ease-in-out; 
             }
             &:hover{
                transform :translateY(5px);
                
            transform:translateY(-50%,-50%);
             }
      
       
        .portfolio-image:hover{
            a{
                display:flex;

            justify-content:center;
            align-items:center;
            
            transition:all .4s ease-in-out; 
          &:hover{
               background-color:var(--primary-color);
              }
    }
 

    }
}
 
svg{
    font-size:2rem;
    color:var(--white-color);
}
            } 
   
 

`;
export default Menu