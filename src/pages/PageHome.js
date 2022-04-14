import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const HeaderWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140, #00606473), url(https://pbs.twimg.com/media/Eqq146CU0AACcrR.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}))

const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
	flexDirection: 'column',
    justifyContent: 'center',
	minHeight: '90vh',
	padding: '0 30px',
	textAlign: 'center',

}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontSize: "3.75rem",
    fontWeight: "600",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("s")]: {
        fontSize: "2rem",
      },
}))

const HeaderDescription = styled(Typography)(({ theme}) => ({
    fontSize: "2rem",
    color: "white",
    fontWeight: '100',
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("s")]: {
      fontSize: "1rem",
    },
}))

const HeaderDetails = styled(Typography)(({ theme}) => ({
    fontSize: "1.5rem",
    color: "white",
    fontWeight: '100',
    maxWidth: '960px',
    margin: "auto",
    [theme.breakpoints.down("s")]: {
      fontSize: "0.5rem",
      
    },
}))

function HomePage() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Container>
                <div className='glass-contain'>
                <HeaderTitle>
                    Hello I'm Patrick van den Brink!
                </HeaderTitle>
                <HeaderDescription>
                    Full Stack Developer | Sports Enthusiast | Avid Golfer
                </HeaderDescription>
                <HeaderDetails>
                    I'm a focused junior software developer from Vancouver, Canada with a strong foundation in full stack web development and experience programming on various platforms. 
                    I'm skilled in identifying problem areas, recognizing the impact on the business and users, and prioritizing the implementation of appropriate solutions. 
                    Throughout my journey as a developer, I have earned a strong reputation for consistently meeting project deadlines.
                </HeaderDetails>
                </div>
                </Container>
            </HeaderContainer>
        </HeaderWrapper>
       
    )
}

export default HomePage;