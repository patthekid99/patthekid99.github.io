import  pitch1  from '../images/pitch-analyzer-1.PNG';
import pitch2  from '../images/pitch-analyzer-2.PNG';
import  pitch3  from '../images/pitch-analyzer-3.PNG';
import pitchLogo from '../images/Major_League_Baseball_logo.png';
import insta1 from '../images/instapat-1.PNG';
import insta2 from '../images/instapat-2.PNG';
import insta3 from '../images/instapat-3.PNG';
import instaLogo from '../images/Instagram_logo.png';
import betlogo from '../images/bet-sharp-croped.png';
import bet1 from'../images/betsharp-1.PNG';
import bet2 from '../images/betsharp-2.PNG';
import bet3 from '../images/betsharp-3.PNG';
import { faJs, faReact, faAws, faMicrosoft, faBootstrap, } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';


export const projects  = [
    {
        id: 1,
        title: "MLB Pitch Analyzer",
        description: "Tool which can used to analyze a players Expected Weighted On-Base-Average against pitches with a similar arsenal for the 2021 season.",
        technolgies: [
            {name: "React", logo: faReact}, 
            {name: "NodeJS", logo: faJs}, 
            {name: "MySQL", logo: faDatabase}, 
            {name: "Heroku", logo: faServer}
        ],
        role: "I was the sole developer for this project",
        logo: pitchLogo,
        image1: pitch1 ,
        image2: pitch2 ,
        image3: pitch3 ,
        linkToSite: "https://mlb-pitch-analyzer.herokuapp.com/",
        repo: "https://mlb-pitch-analyzer.herokuapp.com/"

    },
    {
        id: 2,
        title: "instaPat",
        description: "Full-stack instagram clone.",
        technolgies: [
            {name: "React", logo: faReact}, 
            {name: "AWS", logo: faAws}, 
            {name: "NodeJS", logo: faJs}
        ],
        role: "I was the sole developer for this project",
        logo: instaLogo,
        image1: insta1,
        image2: insta2,
        image3: insta3,
        linkToSite: "https://www.instapat.ca/",
        repo: "https://github.com/patthekid99/instaPat"
    },
    {
        id: 3,
        title: "#Bet",
        description: "A fun, free and interactive online betting platform that allows you to make your pick against both the spread and total for all upcoming NHL games.",
        technolgies: [
            {name: "Asp.net", logo: faMicrosoft}, 
            {name:"Bootstrap", logo: faBootstrap}, 
            {name: 'sqlite', logo: faDatabase}, 
            {name: "Azure", logo: faServer}
        ],
        role: "Project was done by one partner and I in which we both contributed throughout the process.",
        logo: betlogo,
        image1: bet1,
        image2: bet2,
        image3: bet3,
        linkToSite: "#",
        repo: "https://github.com/ca-liu/Internal_Project_Phase_2_Crickets"

    }
]