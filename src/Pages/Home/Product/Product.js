import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const Product = (props) => {
    const { _id, name, image, description, price, rating } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{}}>
            <Card sx={{ minWidth: 275, height: 700, textAlign: 'center' }}>
                <CardMedia
                    component="img"
                    height="194"
                    style={{ width: 'auto', height: '400px', margin: '0 auto' }}
                    image={image}
                    alt=""
                />
                <CardContent>

                    <Typography sx={{ fontFamily: 'cursive' }} variant="h6" component="div">
                        {name}
                    </Typography>


                    <Typography variant="body2">
                        {description.slice(0, 150)}...
                    </Typography>
                    <Rating sx={{ p: 2 }} name="read-only" precision={0.5} value={rating} readOnly />
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                    <Typography sx={{ color: '#8d6e63', fontWeight: 'bold' }} variant="h5" component="div">
                        ${price}
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to={`/placeOrder/${_id}`}>
                        <Button sx={{ color: '#8d6e63' }} variant="outlined" size="medium">Buy Now</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;