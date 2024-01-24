import React from "react";
import "../App.css";
import MinimalistSearchBar from "./SearchBar";
import Logo from "./Logo";
import CustomButton from "./CustomButton";
import { Grid } from "@mui/material";
import CardMusic from "./CardMusic";

const Navbar = () => {
  return (
    <>
      <Grid container className="navbar" spacing={4} sx={{ padding: "2rem" }}>
        <Logo />
        <MinimalistSearchBar />
        <CustomButton />
      </Grid>
    </>
  );
};

export default Navbar;
