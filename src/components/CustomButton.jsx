import React from "react";
import Button from "@mui/material/Button";

const CustomButton = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "green",
          textTransform: "none", // Prevent text from being uppercase
          fontSize: "1rem", // Increase text size
          fontFamily: "'Poppins', sans-serif", // Set the 'Poppins' font
          "&:hover": {
            backgroundColor: "darken(black, 0.2)",
          },
        }}
      >
        Give Feedback
      </Button>
    </>
  );
};

export default CustomButton;
