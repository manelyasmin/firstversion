import css1 from '../img/portImages/datamining.png';
import css2 from '../img/portImages/abalone.png';
import react1 from '../img/portImages/HAR.png';
import img2 from '../img/portImages/meta.png';
import img3 from '../img/portImages/cplus.png';
import web from "../img/portImages/portfolio1.png"
const portfolios = [
    {
        id:1,
        category:"web",
        image:web,
        link1:"https://github.com/manelyasmin/portfolioReact.git",
        title:"portfolio React",
        text:"devloping my portfolio using reactjs"
    },
    {
        id: 2,
        category: 'CSS',
        image: css1,
        link1: 'https://github.com/manelyasmin/Data_Mining.git',
         
        title: 'Data Mining',
        text: 'desktop application developed with javafx using unspervised classfication.The algorithm  used in this project apriori,kmeans,clarnas,kmedoids'
    },
    {
        id: 3,
        category: 'Python',
        image: css2,
        link1: 'https://manelyasmin.github.io/avatarwebsite/',
       
        title: 'Avatar maker',
        text: 'creation user interface for avatar aplication with responsive using react js ,styled-compoentes and react-router'
         
    },
    {
        id: 4,
        category: 'Javascript',
        image: react1,
        link1: 'https://github.com/manelyasmin/HAR.git',
      
        title: 'supervised learning',
        text: 'human activites recongnation for live stream'
    },
    {
        id: 5,
        category: 'Animation',
        image: img2,
        link1: 'https://github.com/manelyasmin/MethaHeurstique.git',
       
        title: 'Meta Heurstique',
        text: 'implimentation with java and javafx the methaheurstique bso and pso and genetic algorithme for solving the 3SAT problem.'
    },
    {
        id: 6,
        category: 'Animation',
        image: img3,
        link1: 'https://github.com/manelyasmin/generative_adversiral_networks.git',
        
        title: 'generative adversial network',
        text: 'creation of web application using flask'
    }
]

export default portfolios;