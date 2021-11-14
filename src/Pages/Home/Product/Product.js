import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, image, description, price } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    height="194"
                    style={{ width: 'auto', height: '400px', margin: '0 auto' }}
                    image={image}
                    alt=""
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        ${price}
                    </Typography>

                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/placeOrder/${_id}`}>
                        <Button size="small">Buy Now</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;