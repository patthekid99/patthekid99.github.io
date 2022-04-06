import Container from '@mui/material/Container';
import '../styles/projects.scss';
import { projects } from '../globals/projects';

function ProjectPage() {
    return (
        <>
        <Container>
        {projects.map((p) => (
            <div key={p.id} className={p.id % 2 === 1 ? 'project-card': 'project-card alt'}>
                <div className='meta'>
                    <div className='photo' style={{ backgroundImage: `url(${p.logo})` }}></div>
                </div>
                <div className='description'>
                    <h1>{p.title}</h1>
                    <p>{p.description}</p>
                    <p className='read-more'>
                        <a href={`/Projects/${p.id}`}>Read More</a>
                    </p>
                </div>
            </div>
        ))}
        </Container>
        </>
        
    )
}

export default ProjectPage;