import { Container } from '@mui/material';
import React from 'react';
import useAuth from './../../../hooks/useAuth';
import img from '../../../images/white.jpg';
import { Box } from '@mui/system';

const Profile = () => {
    const { user } = useAuth();
    return (
        <Box style={{ backgroundImage: `url("${img}")`, padding: '20px', height: 400 }}>
            <Container>
                <h2>My Profile</h2>
                <h3>Username : {user.displayName}</h3>
                <h4>Email : {user.email}</h4>
            </Container>
        </Box>
    );
};

export default Profile;