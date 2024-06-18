import React, { useEffect, useState } from "react";
import CardMusic from "./CardMusic";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination.min.css";

// 1. Create two useStates for new and top albums
// 2. use useEffect to fetch the data from WEB API
// 3. set the data accordingly for both the states using set functions
const Card = () => {
  const [topAlbumCard, setTopAlbumCard] = useState([]);
  const [newAlbumCard, setNewAlbumCard] = useState([]);
  const [isTopAlbumCollapsed, setIsTopAlbumCollapsed] = useState(true);
  const [isNewAlbumCollapsed, setIsNewAlbumCollapsed] = useState(true);
  // const [indexes, setIndexes] = useState([1, 6]);

  const fetchCardMusic = async (url) => {
    try {
      const resp = await axios.get(url);
      const cards = resp.data;
      return cards;
    } catch (err) {
      console.error("Error fetching card music:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const topAlbumData = await fetchCardMusic(
        `https://qtify-backend-labs.crio.do/albums/top`
      );
      const newAlbumData = await fetchCardMusic(
        `https://qtify-backend-labs.crio.do/albums/new`
      );
      setTopAlbumCard(topAlbumData); //useState that only stores top ALbum - 13/13
      setNewAlbumCard(newAlbumData); //useState that only stores new ALbum - 15/15
    };

    fetchData();
  }, []);

  const handleTopAlbumCollapse = () => {
    setIsTopAlbumCollapsed(!isTopAlbumCollapsed);
  };

  const handleNewAlbumCollapse = () => {
    setIsNewAlbumCollapsed(!isNewAlbumCollapsed);
  };

  return (
    <>
      <div className="albums album-bar">
        <Typography>Top Albums</Typography>
        <Button onClick={handleTopAlbumCollapse}>
          {isTopAlbumCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      {isTopAlbumCollapsed ? (
        <Swiper
          spaceBetween={15}
          slidesPerView={6}
          onSlideChange={() => {
            console.log("Slide change");
          }}
          onSwiper={(swiper) => console.log("Swiper")}
          className="albums"
          breakpoints={{
            320: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }}
        >
          <Grid container spacing={2} className="albums">
            {/* State used for indexing of initial and last 1-6 */}
            {topAlbumCard.map((cardItem, index) => (
              <Grid
                item
                key={cardItem.id}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                style={{
                  display: isTopAlbumCollapsed && index > 5 ? "none" : "block",
                }}
              >
                <SwiperSlide>
                  <CardMusic card={cardItem} className="cards" />
                </SwiperSlide>
              </Grid>
            ))}
          </Grid>
        </Swiper>
      ) : (
        <Grid container spacing={2} className="albums">
          {/* State used for indexing of initial and last 1-6 */}
          {topAlbumCard.map((cardItem, index) => (
            <Grid item key={cardItem.id} xs={6} sm={4} md={3} lg={2}>
              {/* {
              ((isTopAlbumCollapsed) && indexes[0] <= index <= indexes[1]) && <CardMusic card={cardItem} className="cards" />
            } */}
              <CardMusic card={cardItem} className="cards" />
            </Grid>
          ))}
        </Grid>
      )}

      <div className="albums album-bar">
        <Typography>New Albums</Typography>
        <Button onClick={handleNewAlbumCollapse}>
          {isNewAlbumCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      {isNewAlbumCollapsed ? (
        <Swiper
          spaceBetween={15}
          slidesPerView={6}
          onSlideChange={() => {
            console.log("Slide change");
          }}
          onSwiper={(swiper) => console.log("Swiper")}
          className="albums"
          breakpoints={{
            320: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }}
        >
          <Grid container spacing={2} className="albums">
            {/* State used for indexing of initial and last 1-6 */}
            {newAlbumCard.map((cardItem, index) => (
              <Grid
                item
                key={cardItem.id}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                style={{
                  display: isNewAlbumCollapsed && index > 5 ? "none" : "block",
                }}
              >
                <SwiperSlide>
                  <CardMusic card={cardItem} className="cards" />
                </SwiperSlide>
              </Grid>
            ))}
          </Grid>
        </Swiper>
      ) : (
        <Grid container spacing={2} className="albums">
          {/* State used for indexing of initial and last 1-6 */}
          {newAlbumCard.map((cardItem, index) => (
            <Grid item key={cardItem.id} xs={6} sm={4} md={3} lg={2}>
              <CardMusic card={cardItem} className="cards" />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Card;
