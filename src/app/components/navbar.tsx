"use client";
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: 1201 }}
      style={{ backgroundColor: "#010159" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portofolio
        </Typography>
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
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
