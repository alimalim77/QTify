import React from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import Headphone from "../assets/headphone.png";

const Hero = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "black", color: "white", padding: "3rem" }}
    >
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "flex-end",
          }}
        >
          <h2>100 Thousand Songs, ad-free</h2>
          <h2>Over thousands podcast episodes”</h2>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div>
          <img
            src={Headphone}
            alt="Your"
            style={{ width: "30%", height: "30%" }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Hero;
