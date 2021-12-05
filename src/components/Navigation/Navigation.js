import React, { useState } from 'react';
import { Button, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavList from "./NavList";
import { Link } from 'react-router-dom';
import logo from '@assets/images/logo.png';
import './Navigation.sass';

function Navigation({isVisible}) {
    const [drawerState, setDrawerState] = useState(false);
    
    const toggleDrawer = (open) => () =>{
        setDrawerState(open);
    }

    return (
        <div className={`nav ${isVisible && "nav__black"}`}>
          <Link to={"/"}>
            <img className="nav__logo" src={logo} alt="Notflix Logo" />
          </Link>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon color="error"></MenuIcon>
          </Button>
          <Drawer anchor={"right"} open={drawerState} onClose={toggleDrawer(false)}>
            <NavList toggleDrawer={toggleDrawer} />
          </Drawer>
        </div>
    )
}

export default Navigation
