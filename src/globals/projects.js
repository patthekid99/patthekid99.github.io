import pitch1 from '../images/mlb-1.jpg';
import pitch2 from '../images/mlb-2.jpg';
import pitch3 from '../images/mlb-3.jpg'
import pitchLogo from '../images/Major_League_Baseball_logo.png';
import insta1 from '../images/instapat-1.jpg';
import insta2 from '../images/instapat-2.jpg';
import insta3 from '../images/instapat-3.jpg';
import instaLogo from '../images/Instagram_logo.png';
import betlogo from '../images/bet-sharp-croped.png';
import bet1 from '../images/betsharp-1.PNG';
import bet2 from '../images/betsharp-2.PNG';
import bet3 from '../images/betsharp-3.PNG';
import { faJs, faReact, faAws, faMicrosoft, faBootstrap, } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';


export const projects = [
    {
        id: 1,
        title: "MLB Pitch Analyzer",
        overview: "Tool which can used to analyze a players Expected Weighted On-Base-Average against pitches with a similar arsenal for the 2021 season.",
        description: "Expected Weighted On-base Average (xwOBA) is formulated using exit velocity, launch angle and, on certain types of batted balls, Sprint Speed. xwOBA is one of the most useful stats for measuring a players skill level as it removes defense from the equation. I developed this tool to allow one to analyze every MLB players Expected Weighted On-Base-Average against every MLB pitcher whose arsenal closely aligns with the pitcher that has been selected.",
        technolgies: [
            { name: "React", logo: faReact },
            { name: "NodeJS", logo: faJs },
            { name: "MySQL", logo: faDatabase },
            { name: "Heroku", logo: faServer }
        ],
        role: "I was the sole developer for this project.",
        logo: pitchLogo,
        image1: pitch1,
        image2: pitch2,
        image3: pitch3,
        linkToSite: "https://mlb-pitch-analyzer.herokuapp.com/",
        repo: "https://mlb-pitch-analyzer.herokuapp.com/"

    },
    {
        id: 2,
        title: "instaPat",
        overview: "Full-stack Instagram clone complete with users, image posts, likes and comments.",
        description: "instaPat was developed for a school project using AWS serverless features. The project is complete with user authentication and the ability for users to upload and delete image posts, like and unlike photos and comment and uncomment on posts.  User login and signup was done using AWS Cognito while all the data associated with the app is stored using a combination of Dynamo and an S3 bucket.",
        technolgies: [
            { name: "React", logo: faReact },
            { name: "AWS", logo: faAws },
            { name: "NodeJS", logo: faJs }
        ],
        role: "I was the sole developer for this project.",
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
        overview: "A fun, free and interactive online betting platform that allows you to make your pick against both the spread and total for all upcoming NHL games.",
        description: "#Bet was developed for a school project and is a fun, free and interactive online betting platform that allows you to make your pick against both the spread and total for all upcoming NHL games. The application allows users track their picks by marking them as either right or wrong once a specific game has concluded. #Bet also includes a leaderboard in which you can compare the accuracy of your picks against all other users.",
        technolgies: [
            { name: "Asp.net", logo: faMicrosoft },
            { name: "Bootstrap", logo: faBootstrap },
            { name: 'sqlite', logo: faDatabase },
            { name: "Azure", logo: faServer }
        ],
        role: "Project was done by one partner and I in which we both contributed throughout the process.",
        logo: betlogo,
        image1: bet1,
        image2: bet2,
        image3: bet3,
        linkToSite: "https://sharpbet.azurewebsites.net/",
        repo: "https://github.com/ca-liu/Internal_Project_Phase_2_Crickets"

    }
]