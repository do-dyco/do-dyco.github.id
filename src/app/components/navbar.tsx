import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: 1201 }}
      style={{ backgroundColor: "#010159" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div>
            <Button color="inherit">
              <ScrollLink to="home" smooth={true} duration={500}>
                Home{" "}
              </ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="project" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="experience" smooth={true} duration={500}>
                Experience
              </ScrollLink>
            </Button>
            <Button color="inherit">
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </Button>
          </div>
        )}
        <Drawer anchor="top" open={open} onClose={handleDrawerClose}>
          <List>
            <ListItem button>
              <ScrollLink to="home" smooth={true} duration={500}>
                <ListItemText primary="Home" />
              </ScrollLink>
            </ListItem>
            <ListItem button>
              <ScrollLink to="project" smooth={true} duration={500}>
                <ListItemText primary="Projects" />
              </ScrollLink>
            </ListItem>
            <ListItem button>
              <ScrollLink to="about" smooth={true} duration={500}>
                <ListItemText primary="About" />
              </ScrollLink>
            </ListItem>
            <ListItem button>
              <ScrollLink to="experience" smooth={true} duration={500}>
                <ListItemText primary="Experience" />
              </ScrollLink>
            </ListItem>
            <ListItem button>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <ListItemText primary="Contact" />
              </ScrollLink>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
