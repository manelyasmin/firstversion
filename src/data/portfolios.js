import css1 from '../img/portImages/datamining.png';
import css2 from '../img/portImages/abalone.png';
import react1 from '../img/portImages/HAR.png';
import img2 from '../img/portImages/meta.png';
import img3 from '../img/portImages/cplus.png';

const portfolios = [
    {
        id: 1,
        category: 'CSS',
        image: css1,
        link1: 'https://github.com/manelyasmin/Data_Mining.git',
         
        title: 'Data Mining',
        text: 'desktop application developed with javafx using unspervised classfication.The algorithm  used in this project apriori,kmeans,clarnas,kmedoids'
    },
    {
        id: 2,
        category: 'Python',
        image: css2,
        link1: 'https://github.com/manelyasmin/Aablone.git',
       
        title: 'Abalone Game',
        text: 'developping Abalone game and use computer vision to make 2 different intelligence artificel play '
    },
    {
        id: 3,
        category: 'Javascript',
        image: react1,
        link1: 'https://github.com/manelyasmin/HAR.git',
      
        title: 'supervised learning',
        text: 'human activites recongnation for live stream'
    },
    {
        id: 4,
        category: 'Animation',
        image: img2,
        link1: 'https://github.com/manelyasmin/MethaHeurstique.git',
       
        title: 'Meta Heurstique',
        text: 'implimentation with java and javafx the methaheurstique bso and pso and genetic algorithme for solving the 3SAT problem.'
    },
    {
        id: 5,
        category: 'Animation',
        image: img3,
        link1: 'https://github.com/manelyasmin/generative_adversiral_networks.git',
        
        title: 'generative adversial network',
        text: 'creation of web application using flask'
    }
]

export default portfolios;