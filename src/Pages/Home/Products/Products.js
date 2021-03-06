import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import Divider from '@mui/material/Divider';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://nameless-depths-17324.herokuapp.com/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontFamily: 'cursive', color: '#8d6e63', mt: 8, mb: 1, fontWeight: '800px' }} variant="h4" component="div">
                        All the Products
                    </Typography>
                    <Divider sx={{ backgroundColor: '#8d6e63', mb: 5 }} />
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map(product =>
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        )}
                    </Grid>
                </Container>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Products;