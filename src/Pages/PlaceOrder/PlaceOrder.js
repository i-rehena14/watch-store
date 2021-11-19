import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
// import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const PlaceOrder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { productId } = useParams();

    const [success, setSuccess] = useState(false);
    const [product, setProduct] = useState({});

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://nameless-depths-17324.herokuapp.com/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    //  console.log(product);
    const onSubmit = data => {
        data.email = user.email;
        data.status = "pending";

        fetch("https://nameless-depths-17324.herokuapp.com/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setSuccess(true);
                    alert('Placed order successfully!!');
                }
            })
        console.log(data);
    };
    return (
        <Box>
            <Navigation></Navigation>
            <Container>
                <Typography variant="h4" sx={{ m: 5, fontFamily: 'cursive' }}>Place Your Order</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '300px', border: '1px solid lightgray', padding: 20 }} src={product.image} alt="" />
                        <h3 style={{ fontFamily: 'cursive' }}>{product.name}</h3>
                        <h2>${product.price}</h2>
                        {/* <h4><Rating name="read-only" precision={0.5} value={product.rating} readOnly /></h4> */}
                        <p>{product.description}</p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Name"
                                {...register("name", { required: true })}
                                value={product.name}
                                sx={{ width: 300 }}
                            />
                            <br /><br />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Price"
                                type="number"
                                {...register("price", { required: true })}
                                value={product.price}
                                sx={{ width: 300 }}
                            />

                            <br /><br />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Address"
                                {...register("address")}
                                placeholder="Address"
                                sx={{ width: 300 }}
                            />

                            <br /><br />
                            <TextField
                                id="date"
                                label="Date"
                                type="date"
                                {...register("date", { required: true })}
                                placeholder="date"
                                sx={{ width: 300 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <br /><br />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Image Link"
                                {...register("image", { required: true })}
                                value={product.image}
                                sx={{ width: 300 }}
                            />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <br /><br />
                            <Button type="submit"
                                variant="contained" >Place Order</Button>
                        </form>
                    </Grid>
                </Grid>


            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default PlaceOrder;