import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    Container,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import "../../Style/header.css";


function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <Box display={"flex"}>
            <Typography margin={1.5}>
                <BedroomChildIcon sx={{bgcolor:"Green"}}/>
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1,m:1 }}
            >
                RK Hotel
            </Typography>
            </Box>
            
            <Divider/>
            <ul className="mobile-navigation">
                <li>
                    <NavLink activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink  to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink  to="/menu">Room</NavLink>
                </li>
            </ul>
        </Box>
    );

    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: "none" } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            color={"rgb(29, 202, 38)"}
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, fontSize:"30px"}}
                        >
                            <BedroomChildIcon sx={{fontSize:"29px", mt:1}}/>
                            RK Hotel 
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu">Room</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "249px",

                            }
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar/>
                </Box>
            </Box>
        </>
    );
}

export default Header;
