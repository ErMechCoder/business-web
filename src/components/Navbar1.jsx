import React, { useState } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,

} from "@mui/icons-material";
import mainlogo from '../img/simma/logo.jpg'

import { NavLink } from "react-router-dom";


const Navbar1 = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

  });
  const LogoBox = styled(Box)({
    width: 443,
    height: 70,
    display: "flex",
    gap: 5,
  });
  const MenuBox = styled(Box)({
    width: "auto",
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 2,
    backgroundColor: "#000"
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Product", Link: "/product" },
    { Name: "Testimonials", Link: "/testimonials" },
    { Name: "Experience", Link: "/experience" },
    { Name: "About Us", Link: "/about-us" },
    { Name: "Contact Us", Link: "/contact-us" },
  ];
  const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{ backgroundColor: "#eef8f9", width: "100%" }} position={"static"}>
      
      <StyledToolbar>
        <LogoBox>
          <Box
            component="img"
            sx={{
              width: 243,
              height: 50,
              maxHeight: { xs: 243, md: 167 },
              maxWidth: { xs: 243, md: 250 },
              marginLeft: { xs: 1, md: 10 },
              mt: 1
            }}
            loading="lazy"
            src={mainlogo}

          />

        </LogoBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map(({ Name, Link }) =>

          (

            <NavLink
              style={{ textDecoration: 'none' }}
              className="navhover"
              key={Name} to={`${Link}`}>
              <Typography
              
                sx={{
                  cursor: "pointer",
                  fontSize: { xs: "12px", sm: "14px", md: "18px" },
                  fontWeight:500,
                  
                  lineHeight: 1.2,
                  color: "rgb(16, 112, 182)"
                }}
              >
                {Name}
              </Typography>
            </NavLink>

          ))}
        </MenuBox>

        <SearchBox>

          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh", backgroundColor: "#eef8f9" }}>
          {MenuItems.map(({ Name, Link }) => (
            <NavLink key={Name} to={`${Link}`}
              style={{ textDecoration: 'none' }}
              className={({ isActive }) =>
    ["nav-link", isActive ? "active" : null]
      .filter(Boolean)
      .join(" ")
  }
             
            >
              <MenuItem
                sx={{
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#0047b3",   
                }}
              >
                {Name}
              </MenuItem>
            </NavLink>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar1;
