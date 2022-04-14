import Container from '@mui/material/Container';
import '../styles/projects.scss';
import { projects } from '../globals/projects';
import { Link } from 'react-router-dom';

function ProjectPage() {
    return (
        <>
        <Container sx={{minHeight: "90vh"}}>
        {projects.map((p) => (
            <div key={p.id} className={p.id % 2 === 1 ? 'project-card': 'project-card alt'}>
                <div className='meta'>
                    <div className='photo' style={{ backgroundImage: `url(${p.logo})` }}></div>
                </div>
                <div className='description'>
                    <h1>{p.title}</h1>
                    <p>{p.overview}</p>
                    <p className='read-more'>
                        <Link to={`/projects/${p.id}`}>Read More</Link>
                    </p>
                </div>
            </div>
        ))}
        </Container>
        </>
        
    )
}

export default ProjectPage;