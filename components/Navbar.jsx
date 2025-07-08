import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [aboutMenuAnchor, setAboutMenuAnchor] = useState(null);

  const handleOpen = (event) => setAboutMenuAnchor(event.currentTarget);
  const handleClose = () => setAboutMenuAnchor(null);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#FF4F0F" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Nalkheda Mandir
          </Typography>
          <Typography variant="subtitle2">Madhya Pradesh</Typography>
          </Box>
        <Box>
          <Button color="inherit" href="#home">
            Home
          </Button>
          <Button color="inherit" onClick={handleOpen}>
            About
          </Button>
          <Menu
            anchorEl={aboutMenuAnchor}
            open={Boolean(aboutMenuAnchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component="a" href="#history">
              History
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#pooja">
              Pooja Details
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#schedule">
              Temple Schedule
            </MenuItem>
          </Menu>
          <Button color="inherit" href="#gallery">
            Gallery
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
          <Button color="inherit" href="#location">
            Location
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
