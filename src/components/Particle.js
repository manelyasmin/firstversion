
import Particles from "react-tsparticles";
import React from 'react';

function Particle() {
  return (
    <>
      <Particles width="100%" height="100vh" 
              params={ {
/* particles: {
    color: {
    value: '#636e72'
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
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
  } */ 
            
 


                particles: {
                  number:{
                    value:109,
                    density:{
                      enable: true,
                      value_area: 1200
                    }
                  },
 
                  color:{
                    value: '#636e72'
                  },
                  shape:{
                    type: 'circle',
                    stroke: {
                      width: 0
                    },
                    polygon:{
                      nb_sides: 6
                    }
                  },
                  line_linked: {
                    enable: false,
                    distance: 150,
                    opacity: 0.9,
                    width: 1,
                    shadow: {
                      enable: true,
                      color: "#e74c3c",
                      blur: 5
                    }
                  },
                 move:{
                    enable: true,
                    random: true,
                    speed: .6,
                    attract:{
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },   
   size: {
                    value: 4,
                    random: true,
                    anim:{
                      speed: 40,
                      size_min: 0.1
                    }
                  },
                  opacity: {
                    value: 0.8,
                    anim: {
                      speed: 1,
                      opacity_min: 0.1
                    }
                  }
                } 
              }} 
              />
  
    </>
  )
}

export default Particle;
