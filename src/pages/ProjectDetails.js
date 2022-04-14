import { useParams } from 'react-router-dom'
import { useState, useEffect  } from 'react'
import { projects } from '../globals/projects'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/details.scss';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectDetails() {

    const { id } = useParams()
    const [project, setProject] = useState({title: '', technolgies: []})

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }

    useEffect (() => {
        function getProject() {
            var findProject = projects.find(p => p.id === Number(id))
            setProject(findProject)
        }
        getProject()
    }, [])

    return (
        <Container sx={{pb: '50px', my: '40px'}}>
        <div className='project-details'>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Button variant="contained" sx={{mb: 2, mr: 2}} href={project.repo} target="_blank" startIcon={<FontAwesomeIcon icon={faGithub} />}>
            View Code
          </Button>
          <Button variant="contained" sx={{mb: 2}} href={project.linkToSite} target="_blank" startIcon={<FontAwesomeIcon icon={faLink} />}>
            View Site
          </Button>
        <Slider {...settings}>
        <div className='slider-style'>
          <div className='photo-slider' style={{ backgroundImage: `url(${project.image1})`}}></div>
        </div>  
        <div className='slider-style'>
          <div className='photo-slider' style={{ backgroundImage: `url(${project.image2})` }}></div>
        </div>
        <div className='slider-style'>
          <div className='photo-slider' style={{ backgroundImage: `url(${project.image3})` }}></div>
        </div>        
        </Slider>
        <h3>Project Role</h3>
        <p>{project.role}</p>
        <h3>Technologies Used</h3>
          <ul style={{ listStyle: "none", display: "flex", paddingLeft: "0px", flexWrap: 'wrap'}}>
            {project.technolgies.map((p) => (
                <li key={p.name}>
                  <Button variant="outlined" sx={{mb: 2, mr: 2}} startIcon={<FontAwesomeIcon icon={p.logo} />}>
                      {p.name}
                  </Button>
              </li>

            ))}
          </ul>
        </div>
        </Container>

    )
}

export default ProjectDetails;