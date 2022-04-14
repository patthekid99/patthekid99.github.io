import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = ['home', 'projects', 'contact']

const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(null)

    const handleOpenMobileNav = (e) => {
        setMobileNav(e.currentTarget)
    }

    const handleCloseMobileNav = () => {
        setMobileNav(null)
    }

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                <Typography
                        varient='h6'
                        noWrap
                        component='div'
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        PATRICK VAN DEN BRINK
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenMobileNav}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={mobileNav}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            open={Boolean(mobileNav)}
                            onClose={handleCloseMobileNav}
                            sx={{
                            display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseMobileNav}>
                                    <Typography textAlign='center'>
                                        <Link style={{textDecoration: "none", textTransform: "uppercase"}} to={`/${page}`}>
                                            {page}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>                       
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        PATRICK VAN DEN BRINK
                    </Typography>
                    <Box sx={{ flexGrow: 0,  display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseMobileNav}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link style={{textDecoration: "none", color:"white"}} to={`/${page}`}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;

