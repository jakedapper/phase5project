import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";



function Navbar() {
  

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" >
          Navbar
        </Typography>
          <div c>
            <Link to="/">
              Home
            </Link>
            <Link to="/venuereviews" >
              About
            </Link>
            <Link to="/restaurants" >
              Contact
            </Link>
            <Link to="/mytour" >
              FAQ
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;