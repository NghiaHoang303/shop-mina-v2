import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  ListItem,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const ListItems = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const DescriptionShop: React.FC = () => {
  return (
    <div>
      <ListItems className={css``}>
        <Card sx={{ maxWidth: 800, margin: "10px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            height="300"
            image="https://i.pinimg.com/originals/3a/39/5a/3a395a550920f00aa0685fb50e59e438.png"
            alt="Paella dish"
          />
          <CardContent>
            <Typography color="text.secondary">'Candy' Flowerpot</Typography>
            <p>$59.99</p>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 800, margin: "10px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            height="300"
            image="https://i.pinimg.com/originals/3a/39/5a/3a395a550920f00aa0685fb50e59e438.png"
            alt="Paella dish"
          />
          <CardContent>
            <Typography color="text.secondary">'Candy' Flowerpot</Typography>
            <p>$59.99</p>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
          </CardActions>
        </Card>
      </ListItems>
    </div>
  );
};

export default DescriptionShop;
