import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Api from '@mui/icons-material/Api'
import Account from '@mui/icons-material/AccountCircle';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Signup from '../Pages/Signup';

const pages = ['Home', 'About', 'Contact', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav() {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleApiIconClick = () => {
        // Navigate to the dashboard route when API icon is clicked
        navigate('/dashboard');
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);

    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'rgb(55, 199, 170)',
        border: '2px solid blueviolet',
        boxShadow: 24,
        position: 'fixed',
        p: 4,
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogin = () => {
        navigate('/login')
    }
    const handleAbout = () => {
        navigate('/about')
    }
    const handleHome = () => {
        navigate('/')
    }
    const handleContact = () => {
        navigate('/contact')
    }
    const handleSignup = () => {
        navigate('/Signup')
    }
    const handleSidepanel = () => {
        navigate('/sidepanel')
    }
    return (
        <>
            <AppBar position="static" sx={{ bgcolor: 'rgba(123, 211, 170, 0.768)' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Api sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }} onClick={handleSidepanel} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HomeDecor
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleLogin}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HomeDecor
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end', gap: '1rem' } }}>

                            <Button onClick={handleHome}
                                sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'rgb(61, 120, 102)', height: '100%' } }}>Home
                            </Button>
                            <Button onClick={handleAbout}
                                sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'rgb(61, 120, 102)', height: '100%' } }}>About
                            </Button>
                            <Button onClick={handleContact}
                                sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'rgb(61, 120, 102)', height: '100%' } }}>Dashboard
                            </Button>
                            <Button onClick={handleLogin}
                                sx={{ my: 2, color: 'white', display: 'block', '&:hover': { backgroundColor: 'rgb(61, 120, 102)' } }}>Login
                            </Button>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Login">
                                <IconButton onClick={handleLogin} sx={{ p: 0 }}>
                                    <Account sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: 'blueviolet' }}>
                        Login
                    </Typography>
                    <TextField id="outlined-basic" label="Username" variant="outlined" color='secondary' sx={{ my: 1, width: '100%' }} />
                    <TextField id="outlined-basic" label="Passowrd" variant="outlined" color='secondary' sx={{ my: 1, width: '100%' }} />
                    <Button variant="contained" sx={{ my: 1, width: '100%', backgroundColor: 'blueviolet' }}>Login</Button>
                    Dont have an account?
                    <Button onClick={handleSignup}
                        sx={{ my: 2, color: 'blueviolet', display: 'block' }}>Signup
                    </Button>
                </Box>
            </Modal>
        </>
    );
}
export default Nav;