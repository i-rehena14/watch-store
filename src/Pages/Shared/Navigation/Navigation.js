import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';
import { Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: red[200] }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <WatchTwoToneIcon sx={{ m: 0 }} />
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Monospace', fontWeight: 'bold' }}>
                            watchTime
                        </Typography>
                        <Link to="/home" style={{ marginLeft: 10, marginRight: 10, textDecoration: 'none', color: 'white' }}>
                            Home
                        </Link>
                        <Link to="/products" style={{ marginLeft: 10, marginRight: 10, textDecoration: 'none', color: 'white' }}>
                            Products
                        </Link>
                        {user.email && <span style={{ backgroundColor: 'white', color: 'black', padding: '5px' }}> {user.displayName} </span>}

                        {user?.email ?
                            <Box>
                                <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>

                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Login</Button>
                            </NavLink>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;