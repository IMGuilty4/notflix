import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Divider, Collapse, ListItemButton } from '@mui/material';
import { GENRES, NETFLIX_TV_ID }  from '../../general/constants';
import { Link } from 'react-router-dom';
import './Navigation.sass';

const NavList = (props) => {
    const {toggleDrawer} = props;
    const [open, setOpen] = useState(false)

    return(
        <Box sx={{width: 250}} role="presentation">
          <List>
            <ListItem button key="Home" onClick={toggleDrawer(false)}>
              <Link to={"/"}>
                  <ListItemText primary="Home Page" />
              </Link>  
            </ListItem>
            <Divider />
            <ListItem button key="Notflix Originals" onClick={toggleDrawer(false)}>
              <Link to={`/genre/${NETFLIX_TV_ID}`}>
                  <ListItemText primary="Notflix Originals" />
              </Link>  
            </ListItem>
          </List>
          <ListItem button onClick={() => setOpen(!open)}>
                <ListItemText primary="By Genres" />
          </ListItem>
          <Collapse in={open}>
                <List>
                  {GENRES.MOVIE.map((genre) => (
                    <Link onClick={toggleDrawer(false)} key={genre.id} to={`/genre/${genre.id}-${genre.label}`}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={genre.label} />
                      </ListItemButton>
                    </Link> 
                  ))}
                </List>
            </Collapse>
        </Box>
    );
}


export default NavList;