import React , { useState } from 'react'
import {MainLayout,InnerLayout} from "../styles/LayOut";
import Title from "../components/Title";
 import portfolios from "../data/portfolios";
import Menu from "../components/Menu";
 import Button from "../components/Button";
 
const allBUttons=['ALl','Animation',...portfolios.map(item=>
item.category)];
function PortfoliosPage() {

  const [menuItem,setMenuItems]=useState(portfolios);
  
  const filter=(button)=>{
    const filterData=portfolios.filter(item=>
    item.category===button);
    setMenuItems(filterData);
  }  
  return (
    <MainLayout>
    <Title title={'portfolios'} span={'portfolios'}/>
    <InnerLayout>
      
     <Menu menuItem={menuItem} />
    </InnerLayout>
    </MainLayout>
  )
}

export default PortfoliosPage