import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';
import { Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
const Navigation = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: 'white !important',
            textDecoration: 'none'
        },

        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: 'black'
        }
    })

    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();
    const [state, setState] = React.useState(false);



    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#a1887f' }}>
                    <Container>
                        <Toolbar>
                            <IconButton
                                className={navIcon}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setState(true)}

                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{
                                flexGrow: 1,
                                display: 'flex',
                                m: 1,
                                fontFamily: 'Monospace',
                                fontWeight: 'bold'
                            }}>
                                <WatchTwoToneIcon sx={{ mt: 0.6 }} />
                                <Typography className={navLogo} variant="h6"
                                    component="div" sx={{ mb: 2 }} >
                                    watchTime
                                </Typography>
                            </Box>
                            <Box className={navItemContainer}>
                                <Link className={navItem} to="/home"><Button style={{ color: 'white' }}>Home</Button></Link>
                                <Link className={navItem} to="/products"><Button style={{ color: 'white' }}>Products</Button></Link>
                            </Box>
                            {user.email &&
                                <h4 className={navItemContainer} style={{ backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '5px' }}> {user.displayName} </h4>
                            }

                            {user?.email ?
                                <Box className={navItemContainer}>
                                    <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>

                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink to="/login" style={{ padding: 2, backgroundColor: '#a1887f', border: '2px solid white', borderRadius: '2px', textDecoration: 'none', color: 'white' }}>
                                    <Button color="inherit" sx={{}}>Login</Button>
                                </NavLink>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <div>
                <React.Fragment >
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>
                                {user.email &&
                                    <ListItem button>
                                        <ListItemIcon><AccountCircleTwoToneIcon /></ListItemIcon>
                                        <ListItemText >
                                            <Link className={mobileNavItem} to="/dashboard">{user.displayName}</Link>
                                            {/* {user.displayName} */}
                                        </ListItemText>
                                    </ListItem>}
                                <ListItem button>
                                    <ListItemIcon><HomeIcon color="disabled" /></ListItemIcon>
                                    <ListItemText >
                                        <Link className={mobileNavItem} to="/">Home</Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemIcon><ProductionQuantityLimitsIcon /></ListItemIcon>
                                    <ListItemText ><Link className={mobileNavItem} to="/products">Products</Link></ListItemText>
                                </ListItem>
                                <Divider />
                                {user?.email ?
                                    <Box>
                                        <ListItem button>
                                            <ListItemIcon><DashboardCustomizeTwoToneIcon /></ListItemIcon>
                                            <ListItemText ><Link className={mobileNavItem} to="/dashboard">Dashboard</Link></ListItemText>
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            <ListItemIcon><LogoutTwoToneIcon /></ListItemIcon>
                                            <ListItemText ><Link className={mobileNavItem} to=""><Button onClick={logout}>Logout</Button></Link></ListItemText>
                                        </ListItem>
                                        <Divider />
                                    </Box>
                                    : <ListItem button>
                                        <ListItemIcon><LoginTwoToneIcon /></ListItemIcon>
                                        <ListItemText ><Link className={mobileNavItem} to="/login">Login</Link></ListItemText>
                                    </ListItem>

                                }
                                <Divider />
                            </List>

                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;