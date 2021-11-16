import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ p: 4 }} variant="h3" component="div">
                        Reviews
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {reviews.map(review => <Grid item xs={4} sm={4} md={4}>
                            <Card sx={{ minWidth: 275, p: 4 }}>
                                <AccountCircleTwoToneIcon sx={{ backgroundColor: '' }} />
                                <CardContent>

                                    <Typography variant="h6" component="div">
                                        {review.name}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {review.rating}
                                    </Typography>

                                    <Typography variant="body2">
                                        {review.review}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>)}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ShowReviews;