import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../../images/watch.png';
import banner from '../../../images/banner.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const AboutUs = () => {
    return (
        <Container sx={{ my: 8 }} style={{ backgroundImage: `url("${banner}")` }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6} sx={{ pr: 1 }}>
                    <Typography variant="h6" sx={{ color: '#8d6e63' }}>
                        About Us
                    </Typography>
                    <Typography variant="h2" sx={{ color: '#8d6e63', mb: 4, fontWeight: "bold" }}>
                        WELCOME TO WATCHTIME
                    </Typography>
                    <Typography variant="P">
                        WATCHTIME is always providing the great watches. Dealing with us can make your experiences the best.
                    </Typography>
                    <br />
                    <Button sx={{ mt: 4, color: '#8d6e63' }} variant="outlined" endIcon={<ArrowRightAltIcon />}>Learn More</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ mt: 2 }}>
                    <img style={{ paddingLeft: 50, border: '5px', borderColor: '#8d6e63', borderBottomLeftRadius: '5px' }} src={img} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AboutUs;