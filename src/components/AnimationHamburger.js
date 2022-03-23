 
function AnimationHamburger(){
    const hamburger=document.querySelector("hamburger");
/* 

const navItems=document.querySelector(".nav-items");  */ 
hamburger.addEventListener("click",()=>{
     hamburger.classList.toggle("active");
   /*  */
    /* navItems.classList.toggle("active");  */
    }) 
}
export default AnimationHamburger;