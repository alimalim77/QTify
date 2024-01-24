import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";

const CardMusic = ({ card }) => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="Spotify Image"
          height="140"
          image={card.image}
        />
        <CardContent>
          <Chip
            label={`${
              card.follows
                ? `Followers: ${card.follows}`
                : `Likes: ${card.likes}`
            }`}
          />
        </CardContent>
      </Card>
      <Typography variant="h6">{card.title}</Typography>
    </div>
  );
};

export default CardMusic;
