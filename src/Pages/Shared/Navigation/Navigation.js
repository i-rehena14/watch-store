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
import { Link } from 'react-router-dom';

const Navigation = () => {
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
                        <Link to="/products" >
                            Products
                        </Link>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;