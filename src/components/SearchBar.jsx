import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const MinimalistSearchBar = () => {
  return (
    <div style={{ position: "relative", width: 200 }}>
      <input
        placeholder="search a song of your choice"
        style={{
          fontFamily: "Poppins",
          borderRadius: "4px",
          backgroundColor: "#f5f5f5",
          padding: "8px",
          width: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "8px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default MinimalistSearchBar;
