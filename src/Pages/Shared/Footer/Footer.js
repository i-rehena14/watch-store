import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Container } from '@mui/material';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


const Footer = () => {
    return (
        <Box sx={{ mt: 4, width: '100%', maxWidth: 360, bgcolor: red[200], color: 'white', flexGrow: 1 }}>
            <Container>
                <WatchTwoToneIcon sx={{ m: 0 }} />
                <Typography variant="h6" component="div" sx={{ fontFamily: 'Monospace', fontWeight: 'bold' }}>
                    watchTime
                </Typography>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Container>
        </Box>
    );
};

export default Footer;