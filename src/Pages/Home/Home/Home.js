import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import ShowReviews from './ShowReviews/ShowReviews';
import AboutUs from '../AboutUs/AboutUs';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://nameless-depths-17324.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const sliced = products.slice(0, 6);
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontFamily: 'cursive', color: '#8d6e63', mt: 8, mb: 1, fontWeight: '800px' }} variant="h4" component="div">
                        Popular Products
                    </Typography>
                    <Divider sx={{ backgroundColor: '#8d6e63', mb: 5 }} />
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {sliced.map(product =>
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        )}
                    </Grid>
                </Container>
            </Box>
            <AboutUs></AboutUs>
            <ShowReviews></ShowReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;