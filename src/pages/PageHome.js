import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140, #00606473), url(https://pbs.twimg.com/media/Eqq146CU0AACcrR.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}))

const HeaderContainer = styled(Box)(({ theme }) => ({
    width: "85%",
    minHeight: "90vh",
    height: "auto",
    padding: "20px",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily: "roboto",
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontSize: "3rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
}))

const HeaderDescription = styled(Typography)(({ theme}) => ({
    fontSize: "2rem",
    color: 'white',
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      margin: theme.spacing(2, 0),
    },
}))

function HomePage() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderTitle variant='h3' component='h4'>
                    Patrick van den Brink
                </HeaderTitle>
                <HeaderDescription>
                    Focused junior software developer with strong foundation in full stack web development and experience programming on various platforms.
                    Skilled in identifying problem areas, recognizing the impact on the business and users, and prioritizing the implementation of appropriate solutions.
                </HeaderDescription>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default HomePage;