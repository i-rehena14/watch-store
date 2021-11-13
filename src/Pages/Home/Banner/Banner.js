import React from 'react';
import Container from '@mui/material/Container';
import './Banner.css';
import Box from '@mui/material/Box';
import img from '../../../images/watch.png';
const Banner = () => {
    return (
        <Box>
            <Container className="banner">
                {/* <img src="https://image.freepik.com/free-vector/wristwatch-concept-illustration_114360-6399.jpg" alt="" /> */}
                <img src={img} alt="" />
            </Container>
        </Box>
    );
};

export default Banner;