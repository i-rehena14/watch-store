import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Product from '../Product/Product';
import { red } from '@mui/material/colors';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
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
                    <Typography variant="h3" component="div">
                        Popular Products
                    </Typography>
                    <Divider sx={{ backgroundColor: red[200], m: 1 }} />
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
            <Footer></Footer>
        </div>
    );
};

export default Home;