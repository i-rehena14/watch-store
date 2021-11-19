import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import Review from '../Review/Review';
import Profile from '../Profile/Profile';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from './../../../hooks/useAuth';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import SvgIcon from '@mui/material/SvgIcon';
import { makeStyles } from '@mui/styles';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import ShopTwoTwoToneIcon from '@mui/icons-material/ShopTwoTwoTone';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
const drawerWidth = 270;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout } = useAuth();
    const { user, admin } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const useStyle = makeStyles({

        mobileNavItem: {
            textDecoration: 'none',
            color: 'black'
        }
    })

    const { mobileNavItem } = useStyle();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link className={mobileNavItem} to="/">
                    <ListItem button>
                        <ListItemIcon><HomeIcon color="disabled" /></ListItemIcon>
                        <ListItemText >
                            Home
                        </ListItemText>
                    </ListItem></Link>
                <Divider />
                <Link className={mobileNavItem} to={`${url}`}>
                    <ListItem button>
                        <ListItemIcon><AccountCircleTwoToneIcon /></ListItemIcon>
                        <ListItemText >
                            Profile
                        </ListItemText>
                    </ListItem></Link>
                <Divider />
                <Link className={mobileNavItem} to={`${url}/payment`}>
                    <ListItem button>
                        <ListItemIcon><PaymentsTwoToneIcon /></ListItemIcon>
                        <ListItemText >
                            Payment
                        </ListItemText>
                    </ListItem></Link>
                <Divider />
                <Link className={mobileNavItem} to={`${url}/myOrders`}>
                    <ListItem button>
                        <ListItemIcon><ShoppingBasketTwoToneIcon /></ListItemIcon>
                        <ListItemText >My Orders</ListItemText>
                    </ListItem></Link>
                <Divider />
                <Link className={mobileNavItem} to={`${url}/review`}>
                    <ListItem button>
                        <ListItemIcon><ReviewsTwoToneIcon /></ListItemIcon>
                        <ListItemText >Review</ListItemText>
                    </ListItem></Link>
                <Divider />
                {admin &&
                    <Box>
                        <Link className={mobileNavItem} to={`${url}/addProduct`}>
                            <ListItem button>
                                <ListItemIcon><AddBoxTwoToneIcon /></ListItemIcon>
                                <ListItemText >Add a Product</ListItemText>
                            </ListItem></Link>
                        <Divider />
                        <Link className={mobileNavItem} to={`${url}/manageAllOrders`}>
                            <ListItem button>
                                <ListItemIcon><ShopTwoTwoToneIcon /></ListItemIcon>
                                <ListItemText >Manage All Orders</ListItemText>
                            </ListItem></Link>
                        <Divider />
                        <Link className={mobileNavItem} to={`${url}/manageProducts`}>
                            <ListItem button>
                                <ListItemIcon><ManageAccountsTwoToneIcon /></ListItemIcon>
                                <ListItemText >Manage All Products</ListItemText>
                            </ListItem></Link>
                        <Divider />
                        <Link className={mobileNavItem} to={`${url}/makeAdmin`}>
                            <ListItem button>
                                <ListItemIcon><AdminPanelSettingsTwoToneIcon /></ListItemIcon>
                                <ListItemText >Make Admin</ListItemText>
                            </ListItem></Link>
                    </Box>
                }
                <Divider />
                <ListItem button>
                    <ListItemIcon><LogoutTwoToneIcon /></ListItemIcon>
                    <ListItemText ><Link className={mobileNavItem} to=""><Button onClick={logout}>Logout</Button></Link></ListItemText>
                </ListItem>
                <Divider />
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar sx={{ backgroundColor: '#a1887f' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography sx={{ mr: 5 }} variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                        <Typography variant="p" noWrap component="div">
                            Signed In As: {user.displayName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <Profile></Profile>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>

                    </Switch>

                </Box>
            </Box>
        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
