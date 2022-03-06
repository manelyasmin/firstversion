
import Particles from "react-tsparticles";
import React from 'react';
import styled from "styled-components"
function Particle() {
  return (
    <>
   
      <Particles  
          canvasClassName="example"   
        
             style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
              margin: "0",
              padding: "0",
              zIndex: "0"
            }}
            options={{
              fullScreen: {
                enable: false
              },         
              
              
              fps_limit: 60,
              interactivity: {
                detect_on: "canvas",
                events: {
                  onclick: { enable: true, mode: "push" },
                  onhover: {
                    enable: true,
                    mode: "attract",
                    parallax: { enable: false, force: 60, smooth: 10 }
                  },
                  resize: true
                },
                modes: {
                  push: { quantity: 4 },
                  attract: { distance: 200, duration: 0.4, factor: 5 }
                }
              },
    
    
    
    
              particles: {
                color: {
                value: '#6d6875'
                },
                links: {
                  color: "#b5838d",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                collisions: {
                  enable: false
                },
                move: {
                  /* direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false
                   */
                  attract: { enable: false, rotateX: 600, rotateY: 1200 },
                  bounce: false,
                  direction: "none",
                  enable: true,
                  out_mode: "out",
                  random: false,
                  speed: 2,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800
                  },
                  value: 80
                },
                opacity: {
                  value: 0.5
                },
                shape: {
                  type: "circle"
                },
                size: {
                  random: true,
                  value: 5
                }
              } 
             
                          }} 
  
              />

 
            
 


                
  
    </>
  )
}
/* const CanvasStyle=styled.CanvSty`
.example{
  position: absolute !important;
}
`; */
export default Particle;
