import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Tabs, Tab } from "@mui/material";
import CardMusic from "./CardMusic";
import axios from "axios";

const Song = () => {
  const [song, setSong] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filterSong, setFilterSong] = useState([]);
  const [isCardCollapsed, setIsCardCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const songs = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
      const genres = await axios.get(
        `https://qtify-backend-labs.crio.do/genres`
      );
      setSong(songs.data);
      setGenre(genres.data);
      setFilterSong(songs.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const match = e.target.id;
    if (match === "all") {
      setFilterSong(song);
      return;
    }
    const filtered = song.filter((item) => item.genre.key === match);
    setFilterSong(filtered);
  };

  return (
    <>
      <div className="albums album-bar">
        <Typography>Songs</Typography>
      </div>
      <div className="albums album-bar">
        <Tabs
          value="all"
          onChange={handleChange}
          // sx={{
          //   backgroundColor: "black",
          //   color: "white",
          // }}
        >
          {genre.data &&
            genre.data.map((item, index) =>
              index === 0 ? (
                <Tab key="all" value="All" id="all" label="All" wrapped />
              ) : (
                <Tab
                  key={item.key}
                  value={item.label}
                  id={item.key}
                  label={item.label}
                  wrapped
                />
              )
            )}
        </Tabs>
      </div>
      <Grid container spacing={2} className="albums">
        {filterSong.map((cardItem, index) => (
          <Grid
            item
            key={cardItem.id}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            // style={{
            //   display: isCardCollapsed && index > 5 ? "none" : "block",
            // }}
          >
            <CardMusic card={cardItem} className="cards" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Song;
