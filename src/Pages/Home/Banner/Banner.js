import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import Box from '@mui/material/Box';
import img from '../../../images/watches.jpg';
import img2 from '../../../images/banner1.jpg';
import { Button, Grid, Typography } from '@mui/material';
const Banner = () => {
    return (
        <Box sx={{}} style={{ backgroundImage: `url("${img2}")` }}>
            {/* <img style={{ width: '100%', mt: 2 }} src={img} alt="" /> */}
            {/* <div className="container">
                <div className="banner-content">
                    <span>New Arrivals</span>
                    <h1>Denim jackets</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque incidunt repellat vero facilis a magnam dolores sunt maxime hic sapiente.</p>
                    <button className="btn-banner" >Disover</button>
                </div>
                <div className="banner-img">
                    <img style={{ width: '100%', mt: 2 }} src={img} alt="" />
                </div>
            </div> */}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ backgroundColor: '#dde5e9b6' }}>
                <Grid item xs={12} sm={12} md={6} style={{
                    color: '#47313',
                    paddingTop: '100px',
                    paddingLeft: '60px',
                    width: '60%'
                }}>
                    <Typography variant="h6" sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        letterSpacing: '3px'
                    }}>
                        About Us
                    </Typography>
                    <Typography variant="h1" sx={{
                        mb: 10,
                        fontSize: '50px',
                        fontWeight: 600,
                        letterSpacing: '3px',
                        fontFamily: 'sans-serif',
                        paddingBottom: '0px',
                        color: '#47313'
                    }}>
                        WELCOME TO WATCHTIME
                    </Typography>
                    <Typography variant="P" style={{
                        marginBottom: '40px',
                        fontSize: '18px',
                        letterSpacing: '1px'
                    }}>
                        WATCHTIME is always providing the great watches. Dealing with us can make your experiences the best.
                    </Typography>
                    <br />
                    <Link to="/products" style={{ textDecoration: 'none' }}><Button sx={{ mt: 4, color: '#8d6e63' }}
                        style={{
                            padding: '10px 30px',
                            backgroundColor: '#744f4f',
                            border: '2px solid #744f4f',
                            borderRadius: '10px',
                            fontSize: '18px',
                            fontWeight: 600,
                            color: 'rgba(247, 243, 230, 0.973)',

                        }}
                        variant="outlined">Discover</Button></Link>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{ mt: 2 }}>
                    <img style={{
                        width: "80%",
                        margin: '30px',
                        padding: '30px',
                        border: '3px solid rgba(182, 114, 65, 0.89)',
                        borderBottomRightRadius: '40px',
                        borderTopLeftRadius: '40px'
                    }} src={img} alt="" />
                </Grid>

            </Grid>
        </Box>

    );
};

export default Banner;