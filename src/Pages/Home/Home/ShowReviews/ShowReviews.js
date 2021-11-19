import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Container, Divider, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://nameless-depths-17324.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontFamily: 'cursive', color: '#8d6e63', mt: 8, mb: 3, fontWeight: '800px' }} variant="h4" component="div">
                        Reviews
                    </Typography>
                    <Divider sx={{ m: 4, backgroundColor: '#8d6e63' }} />
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {reviews.map(review => <Grid key={review._id} item xs={4} sm={4} md={4}>
                            <Card sx={{ minWidth: 275, p: 4, textAlign: 'center' }}>
                                <Avatar sx={{ ml: 16, width: 56, height: 56 }} src="/broken-image.jpg" />
                                <CardContent>

                                    <Typography sx={{ fontFamily: 'cursive' }} variant="h6" component="div">
                                        {review.name}
                                    </Typography>
                                    <Rating name="read-only" precision={0.5} value={review.rating} readOnly />

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