import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../styles/style.scss'


const FooterBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  marginTop: theme.spacing.unit * 8,
  
}))

const Footer = () => {
    return (
    <FooterBar>
        <Container maxWidth="md">
          <Toolbar sx={{justifyContent: "center"}}>
            <div className='icons'>
            <a target="_blank" href='https://github.com/patthekid99'><FontAwesomeIcon icon={faGithub} size="xl" color="white"/></a>
            <a target="_blank" href='https://ca.linkedin.com/in/patrick-van-den-brink-149a411a2'><FontAwesomeIcon icon={faLinkedin} size="xl" color='white'/></a>
            </div>
          </Toolbar>
        </Container>
      </FooterBar>
    
    )
}

export default Footer;