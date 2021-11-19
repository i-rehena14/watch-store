import React from 'react';
import { Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#a1887f', pt: 8, mt: 5 }}>
            <Container sx={{ p: 4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4} sx={{}}>
                        <Box>
                            <Typography variant="h4"
                                component="div" sx={{ mb: 2 }} style={{ color: 'white', textAlign: "left" }} >
                                <WatchTwoToneIcon sx={{ fontSize: 40 }} />watchTime
                            </Typography>
                            <Typography variant="h6" style={{ color: 'white', textAlign: 'left' }}>
                                Address
                            </Typography>
                            <List>
                                <ListItem>

                                    <ListItemText><Typography variant="p" style={{ color: 'white', textAlign: 'left' }}>
                                        5050-4890 Breckinridge St, UK Bruklyn, VT 05898
                                    </Typography></ListItemText>
                                </ListItem>
                            </List>
                            <Typography variant="h6" style={{ color: 'white', textAlign: 'left' }}>
                                Contact
                            </Typography>

                            <List>

                                <ListItem>
                                    <ListItemText><Typography variant="p" style={{ color: 'white', textAlign: 'left' }}>
                                        Call: 12344-567890
                                    </Typography></ListItemText>
                                </ListItem>
                                <ListItem>

                                    <ListItemIcon><Link to="/" style={{ color: 'white', fontSize: '20px' }}><i className="fab fa-facebook"></i></Link></ListItemIcon>
                                    <ListItemIcon><Link to="/" style={{ color: 'white' }}><i className="fab fa-instagram"></i></Link></ListItemIcon>
                                    <ListItemIcon><Link to="/" style={{ color: 'white' }}><i className="fab fa-twitter"></i></Link></ListItemIcon>
                                    <ListItemIcon><Link to="/" style={{ color: 'white' }}><i className="fab fa-linkedin"></i></Link></ListItemIcon>
                                </ListItem>
                            </List>
                        </Box>

                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Typography variant="h6" style={{ color: 'white', textAlign: 'left' }}>
                            Company
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Our Services</Link></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Privacy policy</Link></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} sx={{}}>
                        <Typography variant="h6" style={{ color: 'white', textAlign: 'left' }}>
                            Get Help
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Shipping</Link></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Returns</Link></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Order Status</Link></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Payment Options</Link></ListItemText>
                            </ListItem>
                        </List>

                    </Grid>

                </Grid>
                <Divider sx={{ m: 4, backgroundColor: 'white' }}></Divider>
                <Typography variant="p" style={{ color: 'white' }}>copyright&copy;2021 watchTime. All Rights Reserved.</Typography>
            </Container>
        </Box>

    );
};

export default Footer;