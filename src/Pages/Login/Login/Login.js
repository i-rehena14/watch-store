import React, { useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { red } from '@mui/material/colors';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [login, setLogin] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLogin = { ...login };
        newLogin[field] = value;
        setLogin(newLogin);
    }
    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 7 }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="filled-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="filled" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="filled-password-input"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="filled"
                        />

                        <Button sx={{ width: '75%', height: 50, m: 1, backgroundColor: red[200] }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;