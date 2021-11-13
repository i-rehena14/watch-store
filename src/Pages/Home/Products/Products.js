import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';



const products = [
    {
        name: 'Red grey steel watch clock',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, maxime!',
        price: 200,
        img: 'https://image.freepik.com/free-vector/red-grey-steel-watch-clock-chronograph-white_33869-1272.jpg'
    },
    {
        name: 'Red grey steel watch clock',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, maxime!',
        price: 200,
        img: 'https://image.freepik.com/free-vector/red-grey-steel-watch-clock-chronograph-white_33869-1272.jpg'
    },
    {
        name: 'Red grey steel watch clock',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, maxime!',
        price: 200,
        img: 'https://image.freepik.com/free-vector/red-grey-steel-watch-clock-chronograph-white_33869-1272.jpg'
    },
    {
        name: 'Red grey steel watch clock',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, maxime!',
        price: 200,
        img: 'https://image.freepik.com/free-vector/red-grey-steel-watch-clock-chronograph-white_33869-1272.jpg'
    },
    {
        name: 'Red grey steel watch clock',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, maxime!',
        price: 200,
        img: 'https://image.freepik.com/free-vector/red-grey-steel-watch-clock-chronograph-white_33869-1272.jpg'
    },
    {
        name: 'Red grey steel watch clock',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, maxime!',
        price: 200,
        img: 'https://image.freepik.com/free-vector/red-grey-steel-watch-clock-chronograph-white_33869-1272.jpg'
    }
]
const Products = () => {
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h3" component="div">
                        Popular Products
                    </Typography>
                    <Divider sx={{ backgroundColor: red[200], m: 1 }} />
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map(product =>
                            <Product
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